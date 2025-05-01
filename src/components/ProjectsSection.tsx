import React from "react";
import { projects } from "@/lib/data";
import { SkillTag } from "./SkillsSection";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Github } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🚀 Projects
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.2}>
              <GlassCard className="group overflow-hidden dark:border-purple-500/10 h-full flex flex-col">
                <CardHeader className="bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-md group-hover:scale-105 transition-transform duration-300"
                  />
                  <CardTitle className="text-center mt-2 md:text-left group-hover:text-purple-500 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc ml-2 pt-2 space-y-1 text-sm group-hover:space-y-2 transition-all duration-300">
                    <motion.li
                      className="text-muted-foreground"
                      viewport={{ once: true }}
                    >
                      {project.description}
                    </motion.li>
                  </ul>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
                    {project.tech?.map((skill, index) => (
                      <SkillTag key={skill} skill={skill} index={index} />
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center md:justify-start gap-4 items-center border-t border-border/30 bg-gradient-to-r from-purple-500/5 to-pink-500/5 pt-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-muted-foreground hover:text-purple-500 transition-colors group/link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/link:rotate-12 transition-transform duration-300" />
                      View on GitHub
                    </motion.a>
                  )}
                  {project.web && (
                    <motion.a
                      href={project.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-muted-foreground hover:text-purple-500 transition-colors group/link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🌐 Visit Website
                    </motion.a>
                  )}
                </CardFooter>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
