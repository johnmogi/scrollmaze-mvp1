import { storyPrompts } from "../data/stories.js";
import { randomFrom } from "../utils/random.js";

export function generateStory() {
  const story = randomFrom(storyPrompts);
  if (!story) {
    return null;
  }

  const mood = story.mood ?? "Whimsical peril";
  return { ...story, mood };
}

export function formatStoryLog(story) {
  if (!story) {
    return "No new tales were spun today.";
  }

  return `A new chronicle unfurled: ${story.title}.`;
}
