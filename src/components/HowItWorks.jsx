import React from "react";

const HowItWorks = () => {
  return (
    <>
      <div className="relative h-[316px] w-full">
        <img
          src="https://images7.alphacoders.com/111/1111209.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-playfair text-white">Functionality</h1>
        </div>
      </div>
      <div className="w-11/12 m-auto py-20 md:w-10/12">
        <div className="mb-8">
          <h1 className="text-lg font-bold mb-2">1. Detection of Footsteps</h1>
          <li>
            Piezoelectric sensors are strategically placed on walkways or floors
            where foot traffic occurs.
          </li>
          <li>
            When individuals step on these sensors, they generate mechanical
            stress, causing them to deform slightly and produce electrical
            charges.
          </li>
        </div>
        <div className="mb-8">
          <h1 className="text-lg font-bold mb-2">
            2. Conversion of Mechanical Energy to Electrical Energy
          </h1>
          <li>
            The deformation of the piezoelectric sensors under pressure
            generates small electrical voltages.
          </li>
          <li>
            These electrical charges are then collected and stored for
            conversion into usable electrical energy
          </li>
        </div>
        <div className="mb-8">
          <h1 className="text-lg font-bold mb-2">
            3. Signal Processing with Arduino
          </h1>
          <li>
            The Arduino microcontroller processes the electrical signals
            generated by the piezoelectric sensors.
          </li>
          <li>
            Analog-to-digital conversion enables the Arduino to interpret the
            magnitude and frequency of the footstep-generated electrical
            signals.
          </li>
        </div>
        <div className="mb-8">
          <h1 className="text-lg font-bold mb-2">
            4. Energy Regulation and Storage
          </h1>
          <li>
            The processed electrical signals are regulated to ensure stable
            power output.
          </li>
          <li>
            Capacitors and voltage regulators are used to store and stabilize
            the generated electrical energy.
          </li>
        </div>
        <div className="mb-8">
          <h1 className="text-lg font-bold mb-2">
            5. Power Distribution and Utilization
          </h1>
          <li>
            The stored electrical energy can be utilized to power low-energy
            devices directly or stored in batteries for future use.
          </li>
          <li>
            LED indicators may be integrated to visually display the
            availability of generated power.
          </li>
        </div>
        <div className="mb-8">
          <h1 className="text-lg font-bold mb-2">
            6. Optimization and Efficiency
          </h1>
          <li>
            Continuous monitoring and optimization techniques are employed to
            maximize energy harvesting efficiency.
          </li>
          <li>
            Calibration of sensors and adjustments to signal processing
            algorithms contribute to enhanced performance and reliability.
          </li>
        </div>

        <div className="mb-8">
          <h1 className="text-lg font-bold mb-2">
            7. Integration with Existing Infrastructure
          </h1>
          <li>
            The footstep power generator can be seamlessly integrated into
            existing infrastructure, such as sidewalks, corridors, or public
            spaces.
          </li>
          <li>
            Its non-intrusive design allows for easy installation and minimal
            disruption to the surrounding environment.
          </li>
        </div>
        <div className="mb-8">
          <h1 className="text-lg font-bold mb-2">
            8. Scalability and Adaptability
          </h1>
          <li>
            The modular design of the system enables scalability to accommodate
            various foot traffic volumes and environments.
          </li>
          <li>
            Customization options allow for adaptation to specific project
            requirements and objectives.
          </li>
        </div>
        <div className="mb-8">
          <h1 className="text-lg font-bold mb-2">9. Real-World Applications</h1>
          <li>Public spaces: parks, shopping malls, airports</li>
          <li>Transportation hubs: train stations, bus terminals</li>
          <li>Urban environments: sidewalks, pedestrian bridges</li>
        </div>
        <div className="mb-8">
          <h1 className="text-lg font-bold mb-2">10. Environmental Impact</h1>
          <li>
            By harnessing renewable energy from human motion, the footstep power
            generator contributes to reducing carbon emissions and promoting
            sustainable energy practices.
          </li>
          <li>
            It serves as a tangible example of harnessing clean energy from
            everyday activities.
          </li>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
