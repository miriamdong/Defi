import ReactPlayer from "react-player";
import classes from "../video/BackgroundVideo.module.scss";

export default function Story() {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384">
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse">
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384">
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse">
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384">
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse">
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              Introducing
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              The outline of the progress
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            The new design project of an innovative graphene bulb based on technology patented by
            the National Academy of Sciences in Wrocław is now available. The technology implemented
            in the light bulb allows induction of light in the visible spectrum via the use of a
            laser beam with a wavelength in the infrared (IR) range. In the article, we will also
            share the market analysis and many interesting details about the project. The aim of the
            project is to create a prototype of a graphene bulb based on an original industrial
            design.
          </p>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <p>
            The first stage of the graphene bulb design project consisted of finding{" "}
            <strong>technical solutions</strong>
            that would enable the construction of a new product in a patented technology, which thus
            far had not been used for commercial purposes. Specialists from various fields,
            including engineers specializing in laser technology, were involved in the project. The
            project turned out to be quite a <strong>challenge </strong>as it was impossible to use
            components available on the market. After constructing a dedicated laser and estimating
            the measurements of the target product, it was time for a concept design.
          </p>
          <ul>
            <li>The light bulb's design</li>
            <li>
              The main goal of the materials selection policy is to describe the list of materials
              that are necessary to manufacture a new product, along with the list of suppliers and
              the criteria for assessing the quality of materials and their application.
            </li>
            <li>
              The presented materials policy is applicable for the production of individual light
              bulbs.
            </li>
          </ul>
          <p>
            Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit
            viverra aliquam porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum
            ut nisl, justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis. Amet, duis sed
            elit interdum dignissim.
          </p>
          <h2>Materials selection policy</h2>
          <p>
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu
            ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh.
            Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus
            ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.
          </p>
          <blockquote>
            <p>
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
              consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.
            </p>
          </blockquote>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
            semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
            viverra tellus varius sit neque erat velit.
          </p>
          <figure>
            {/* <img
              className="w-full rounded-lg"
              src="/img/light.jpeg"
              alt=""
              width={1310}
              height={873}
            /> */}
            <div className={classes.Container}>
              <ReactPlayer
                className="absolute inset-0 h-full w-full object-cover"
                url="https://player.vimeo.com/video/552165449?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              />
            </div>
            <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
          </figure>
          <h2>Everything you need to get up and running</h2>
          <p>
            Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam
            varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique.
            Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget
            dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras
            fermentum convallis quam.
          </p>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
            semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
            viverra tellus varius sit neque erat velit.
          </p>
        </div>
      </div>
    </div>
  );
}
