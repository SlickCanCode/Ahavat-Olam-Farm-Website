
export default function About() {
  return (
    <section className="bg-white py-30 px-6 lg:px-20">

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-black poppins-bold">
          <span className="text-green-600 text-4xl lg:text-5xl">About</span> Ahavat Olam Global Farm
        </h2>

        <p className="mt-4 text-gray-600">
          A growing agribusiness committed to producing, processing,
          and distributing nutritious agricultural products while
          strengthening Nigeria’s food system.
        </p>
      </div>


      {/* Section 1 */}
      <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">

        <img
          src="src\assets\ceo_pic1.jpg"
          className="rounded-xl w-full h-80 object-cover shadow-lg hover:scale-105 transition"
          alt="Farm"
        />

        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            Who We Are
          </h3>

          <p className="mt-4 text-gray-600">
            Ahavat Olam Global Farm is a growing agribusiness dedicated
            to producing high-quality agricultural products. Our work
            focuses on sustainable farming, responsible food production,
            and delivering fresh produce to households and markets.
          </p>
        </div>

      </div>


      {/* Section 2 */}
      <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">

        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            What We Do
          </h3>

          <p className="mt-4 text-gray-600">
            We combine crop production, value-added processing, and
            efficient distribution to ensure that every harvest reaches
            consumers in the best possible condition. Our mission is
            simple — to help feed communities with affordable,
            nutritious food.
          </p>
        </div>

        <img
          src="src\assets\yam_plant_pic.jpg"
          className="rounded-xl w-full h-80 object-cover shadow-lg hover:scale-105 transition"
          alt="Harvest"
        />

      </div>


      {/* Section 3 */}
      <div className="grid gap-12 lg:grid-cols-2 items-center">

        <img
          src="src\assets\Harvesting joy in Nigeria's fields.png"
          className="rounded-xl w-full h-80 object-cover shadow-lg hover:scale-105 transition"
          alt="Community"
        />

        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            Community Impact
          </h3>

          <p className="mt-4 text-gray-600">
            Agriculture creates opportunity. Through our work, we support
            youth and women in agriculture while contributing to local
            food security and economic growth.
          </p>

          <p className="mt-4 text-gray-600">
            As we grow, we remain committed to innovation, transparency,
            and expanding our impact across Nigeria’s agricultural
            value chain.
          </p>
        </div>

      </div>

    </section>
  )
}

