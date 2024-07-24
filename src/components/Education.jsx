import React, { useState } from 'react';
import { Education } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    const [selectedYear, setSelectedYear] = useState(null);

    const handleYearClick = (year) => {
        setSelectedYear(selectedYear === year ? null : year);
    };

    return (
        <div className="border-b text-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-5xl font-bold"
            >
                Education
            </motion.h1>
            <div>
                {Education.map((education, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                        >
                            <p className="mb-2 text-neutral-900 font-bold">
                                {education.year}
                            </p>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h2 className="mb-2 text-xl font-bold">
                                {education.standard} <span className="text-sm text-red-600">{education.name}</span>
                            </h2>

                            {education.subjectsByYear ? (
                                <div>
                                    <div className="flex flex-wrap gap-1 mb-2">
                                        {Object.keys(education.subjectsByYear).map((year) => (
                                            <button
                                                key={year}
                                                onClick={() => handleYearClick(year)}
                                                className={`my-2 font-semibold text-lg md:text-xl flex items-center justify-center gap-1 bg-purple-600 text-white px-2 py-1 rounded-full ${
                                                    selectedYear === year ? 'bg-purple-800' : ''
                                                }`}
                                            >
                                                {year}
                                            </button>
                                        ))}
                                    </div>
                                    {selectedYear && (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {education.subjectsByYear[selectedYear].map((subject, index) => (
                                                <span key={index} className="rounded bg-purple-700 px-2 py-1 text-sm font-medium text-blue-300">
                                                    {subject}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-2">
                                    {education.subjects.map((subject, index) => (
                                        <span key={index} className="rounded bg-purple-700 px-2 py-1 text-sm font-medium text-blue-300">
                                            {subject}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
