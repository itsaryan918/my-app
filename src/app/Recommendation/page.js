"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Music,
  BookOpen,
  Sun,
  Coffee,
  Wind,
  Bike,
  Palette,
  Award as Garden,
  Brain,
  RefreshCw,
  Quote,
} from "lucide-react";

const activities = [
  {
    title: "Mindful Meditation",
    description: "Take 10 minutes to practice mindful breathing and meditation",
    icon: Brain,
    duration: "10 mins",
    difficulty: "Easy",
    benefits: ["Reduces stress", "Improves focus", "Promotes emotional balance"],
    music: {
      title: "Weightless",
      artist: "Marconi Union",
      url: "https://open.spotify.com/track/1ZqHjApl3pfzwjweTfMi0g",
    },
    affirmation: "Take a moment to breathe and center yourself. You are present and at peace.",
  },
  {
    title: "Nature Walk",
    description: "Go for a peaceful walk in nature or a nearby park",
    icon: Sun,
    duration: "30 mins",
    difficulty: "Easy",
    benefits: ["Boosts vitamin D", "Improves mood", "Light exercise"],
    music: {
      title: "Clair de Lune",
      artist: "Debussy",
      url: "https://open.spotify.com/track/2WfaOiMkCvy7F5fcp2zZ8L",
    },
    affirmation: "Nature's beauty surrounds you. Take time to appreciate the simple things.",
  },
  {
    title: "Creative Art Session",
    description: "Express yourself through drawing, painting, or coloring",
    icon: Palette,
    duration: "45 mins",
    difficulty: "Medium",
    benefits: ["Self-expression", "Stress relief", "Mindfulness"],
    music: {
      title: "River Flows In You",
      artist: "Yiruma",
      url: "https://open.spotify.com/track/3OxZ4asD88P1lJJmLcXz4K",
    },
    affirmation: "Your creativity knows no bounds. Let your imagination flow freely.",
  },
];

export default function RecommendationsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentActivity = activities[currentIndex];

  const nextActivity = () => {
    setCurrentIndex((prev) => (prev + 1) % activities.length);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-card to-muted p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="mb-8 text-center">
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-4xl font-bold mb-4"
          >
            Mindful Activities
          </motion.h1>
          <p className="text-muted-foreground text-lg">
            Discover activities that can help improve your mood and well-being
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <Card className="p-6 backdrop-blur-sm bg-card/80">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <currentActivity.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold">{currentActivity.title}</h2>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextActivity}
                  className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <RefreshCw size={20} />
                </motion.button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">{currentActivity.description}</p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Coffee className="h-4 w-4 text-primary" />
                      <span className="text-sm">Duration: {currentActivity.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-primary" />
                      <span className="text-sm">Difficulty: {currentActivity.difficulty}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Benefits:</h3>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {currentActivity.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Music className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Recommended Music</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {currentActivity.music.title} by {currentActivity.music.artist}
                    </p>
                    <a
                      href={currentActivity.music.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm hover:underline inline-flex items-center gap-1"
                    >
                      Listen on Spotify <span>→</span>
                    </a>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Quote className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Daily Affirmation</h3>
                    </div>
                    <p className="text-muted-foreground">
                      {currentActivity.affirmation}
                    </p>
                  </div>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.01 }} className="mt-6">
                <Button className="w-full" size="lg">
                  Start Activity
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <Card className="p-6 bg-primary/5 text-center">
            <h2 className="text-2xl font-semibold mb-4">Track Your Progress</h2>
            <p className="text-muted-foreground mb-4">
              Remember to log your activities and mood changes in your journal to track your progress over time.
            </p>
            <Button className="bg-primary text-primary-foreground">
              Open Journal
            </Button>
          </Card>
        </motion.div>
      </motion.div>
    </main>
  );
}