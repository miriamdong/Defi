/* This example requires Tailwind CSS v2.0+ */
import Tokennav from "../../components/token/tokennav";
const faqs = [
  {
    id: 1,
    question: "Why Blockchain is the future?",
    answer:
      "Affordability - Blockchain technology can massively reduce transaction costs simply by removing the need for third parties (such as banks and financial institutions). The blockchain system itself is able to manage transactions and keep records securely.",
  },
  {
    id: 1,
    question: "Why do we need Blockchain?",
    answer:
      "Blockchain stories and accesses data in a decentralised way making the whole system incredibly secure – because, unlike a centralised database, there's no one single point of entry for hackers. This makes it particularly useful for recording transactions in a secure manner.",
  },
  {
    id: 1,
    question: "What is so special about RocketMeow?",
    answer:
      "We use Blockchain technology to increase transparency of transactions, as everybody on the network has a copy of the ledger. This makes the blockchain ledgers tamper-proof. Using blockchain technology, people can make transactions from any part of the globe.",
  },
  {
    id: 1,
    question: "Why RocketMeow is better?",
    answer:
      "We make investing and Escrow Services Simple, Fast, and Cheap. Uses cryptography, RocketMEOW adds a layer of security to the data stored on the network. The decentralization feature makes us provide better security than other systems.",
  },
  {
    id: 1,
    question: "What is a Defi platform?",
    answer:
      "It's built from the ground up as a crypto-solution for escrow services, timed payments, and OTC currency swaps. For the first time, crypto developers and investors will be able to execute such transactions via a single fast, simple, and inexpensive platform.",
  },
  {
    id: 1,
    question: "How Blockchain can be used in Escrow?",
    answer:
      "Escrow transactions are one of the most reliable ways to overcome cryptocurrency volatility, which can see a cryptocurrency's value fluctuate significantly in the time it takes to complete a transaction. Escrow services ensure trades are executed in a secure and timely manner.",
  },
  // More questions...
];

export default function Example() {
  return (
    <>
      <Tokennav href="/user" />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Frequently asked questions
          </h2>
          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
