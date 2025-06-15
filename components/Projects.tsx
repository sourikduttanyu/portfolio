'use client';

const projects = [
  {
    title: 'FeastFleet',
    description:
      'A serverless food delivery system built on AWS using Lambda, DynamoDB, and API Gateway for real-time order tracking.',
    link: 'https://github.com/sourikduttanyu/FeastFleet',
  },
  {
    title: 'NYU Enrolls',
    description:
      'Redesigning NYU’s enrollment system with smart recommendations and smoother UX, backed by React, Flask, and MongoDB.',
    link: 'https://github.com/sourikduttanyu/NYU-Enrolls',
  },
  {
    title: 'RouteSavvy',
    description:
      'Optimizing NYC subway routes using Kafka, PySpark, and real-time GTFS feeds. Visualized with Metabase.',
    link: 'https://github.com/sourikduttanyu/RouteSavvy',
  },
];

const Projects = () => {
  return (
    <div className="space-y-6">
      {projects.map((project, i) => (
        <div key={i} className="bg-white/5 p-4 rounded-lg">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-gray-300">{project.description}</p>
          <p className="text-xs text-blue-300 mt-1">
            <a href={project.link} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
