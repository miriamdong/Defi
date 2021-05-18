import React, { Component } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { select, selectAll } from "d3-selection";
import { scaleOrdinal, scaleLinear } from "d3-scale";
import dynamic from "next/dynamic";

// const d3 = { select, selectAll, scaleOrdinal, scaleLinear };
//
const svg = d3.select("svg");

const d3 = dynamic(() => import("d3").then((mod) => mod.d3), { ssr: false });

import "d3-selection-multi";

const body = d3.select("body");
const svg = body.append("svg");
const rect = svg.append("rect");

rect
  .attr("class", "box")
  .attr("x", 20)
  .attr("y", 20)
  .attr("height", 100)
  .attr("width", 200)
  .attr("fill", "blue");

d3.select(".box").attrs({ fill: "red" });

export default function Bubble() {
  let txNodes = [];

  var svg = d3.select("#bubbleCanvas"),
    width = +svg.attr("width"),
    height = +svg.attr("height");
  var centerX = width / 2.0;
  var centerY = height / 2.0;
  var counter = 0;

  var node = svg.append("g").attr("class", "nodes").selectAll("circle");

  var bubbleSimulation = d3
    .forceSimulation(txNodes)
    .force("charge", d3.forceManyBody().strength(-3))
    .force("x", d3.forceX())
    .force("y", d3.forceY())
    .force(
      "collision",
      d3.forceCollide(function radius(d, i) {
        return d.scaledValue;
      }),
    )
    .alphaTarget(1)
    .on("tick", bubblesTicked);

  var websocket;

  function init() {
    websocket = new WebSocket("wss://ws.blockchain.info/inv");

    websocket.onopen = function () {
      document.getElementById("status").innerHTML = "Connected";
    };

    websocket.onerror = function (event) {
      document.getElementById("status").innerHTML = "Error";
    };

    websocket.onmessage = function (event) {
      //message processing code goes here
      var msgData = JSON.parse(event.data);
      if (msgData.op == "utx") {
        var txHash = msgData.x.hash;
        var outputs = msgData.x.out;
        var totalTxValue = 0;
        for (var j = 0; j < outputs.length; j++) {
          var output = outputs[j];
          totalTxValue += output.value;
        }
        totalTxValue /= 100000000;
        var newTx = { id: txHash, value: totalTxValue, scaledValue: 5 + Math.log(totalTxValue) };
        txNodes.push(newTx);
        if (txNodes.length > 400) {
          txNodes.shift();
        }
        bubblesRestart();

        document.getElementById("status").innerHTML = "tx: " + txHash;
      }
    };
  }

  function sendMessage(message) {
    document.getElementById("output").innerHTML = message;
    websocket.send(message);
  }

  function bubblesRestart() {
    var updateSelection = node.data(txNodes, function (d) {
      return d.id;
    }); //updated transactions
    updateSelection.exit().remove(); //removed transactions
    var enterSelection = updateSelection
      .enter()
      .append("circle")
      .attr("r", function (d) {
        return d.scaledValue;
      })
      .attr("fill", function (d) {
        return d3.hsl(180 + Math.min(d.value * 4, 180), 1, 0.5);
      }); //new transactions
    node = updateSelection.merge(enterSelection);
    bubbleSimulation.nodes(txNodes);
    bubbleSimulation.alpha(1).restart();
  }

  function bubblesTicked() {
    node
      .attr("cx", function (d) {
        return d.x + centerX;
      })
      .attr("cy", function (d) {
        return d.y + centerY;
      });
  }

  function start() {
    websocket.send('{"op":"unconfirmed_sub"}');
  }

  function stop() {
    websocket.send('{"op":"unconfirmed_unsub"}');
  }

  window.addEventListener("load", init, false);

  return (
    <div>
      <div>
        <button onclick="start()">Start</button>
        <button onclick="stop()">Stop</button>
      </div>
      <p id="status">Not connected</p>
      <svg width="400" height="400" id="bubbleCanvas" class="vizCanvas"></svg>
    </div>
  );
}
