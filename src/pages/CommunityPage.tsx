import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Shield, Filter } from "lucide-react";

const filters = ["All", "Hopeful ✨", "Struggles 💪", "Healing 🌱", "Advice 💡"];

const storiesData = [
  {
    id: 1,
    author: "Anonymous 🌸",
    avatar: null,
    time: "2 hours ago",
    content: "Today I finally told someone how I was feeling. It was terrifying, but I feel lighter now. If you're holding something in — it's okay to let it out. 💛",
    category: "Hopeful ✨",
    reactions: { relate: 24, strong: 18, support: 31 },
  },
  {
    id: 2,
    author: "Luna M.",
    avatar: "🌙",
    time: "5 hours ago",
    content: "Some days are harder than others, and today was one of those days. But I reminded myself that storms don't last forever. Sharing this so you know: it's okay to have bad days.",
    category: "Struggles 💪",
    reactions: { relate: 42, strong: 35, support: 28 },
  },
  {
    id: 3,
    author: "Anonymous 🌿",
    avatar: null,
    time: "1 day ago",
    content: "6 months of therapy and I can finally say: I'm proud of myself. To anyone starting their journey — keep going. The version of you that you're becoming is worth every hard conversation.",
    category: "Healing 🌱",
    reactions: { relate: 67, strong: 55, support: 89 },
  },
  {
    id: 4,
    author: "Sam K.",
    avatar: "🌻",
    time: "1 day ago",
    content: "Quick tip that helps me: When anxiety hits, I name 5 things I can see, 4 I can touch, 3 I can hear, 2 I can smell, 1 I can taste. Grounding is magic. Try it. 🧘",
    category: "Advice 💡",
    reactions: { relate: 53, strong: 12, support: 44 },
  },
  {
    id: 5,
    author: "Anonymous 💫",
    avatar: null,
    time: "2 days ago",
    content: "I used to think asking for help meant I was weak. Now I know it's the bravest thing I've ever done. You're brave too, even if you don't feel it yet.",
    category: "Hopeful ✨",
    reactions: { relate: 91, strong: 78, support: 65 },
  },
];

const CommunityPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? storiesData
    : storiesData.filter((s) => s.category === activeFilter);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-foreground mb-2">Community Stories</h1>
        <p className="text-muted-foreground">A safe space to share, heal, and support each other 💛</p>
      </motion.div>

      {/* Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`
              flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
              ${activeFilter === f
                ? "bg-primary text-primary-foreground shadow-soft"
                : "bg-card text-muted-foreground border border-border hover:bg-muted/60"
              }
            `}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Stories */}
      <div className="space-y-4">
        {filtered.map((story, i) => (
          <motion.article
            key={story.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-soft transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center text-lg">
                {story.avatar || <Shield className="w-5 h-5 text-primary" />}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{story.author}</p>
                <p className="text-xs text-muted-foreground">{story.time}</p>
              </div>
              <span className="ml-auto px-3 py-1 rounded-full text-xs font-semibold bg-mint-light text-secondary-foreground">
                {story.category}
              </span>
            </div>

            <p className="text-sm text-foreground leading-relaxed mb-4">{story.content}</p>

            <div className="flex items-center gap-3 border-t border-border pt-3">
              <ReactionButton emoji="🤝" label="I relate" count={story.reactions.relate} />
              <ReactionButton emoji="💪" label="Stay strong" count={story.reactions.strong} />
              <ReactionButton emoji="❤️" label="Support" count={story.reactions.support} />
              <button className="ml-auto p-2 rounded-xl text-muted-foreground hover:text-primary hover:bg-lavender-light transition-colors">
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

const ReactionButton = ({ emoji, label, count }: { emoji: string; label: string; count: number }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <button
      onClick={() => setClicked(!clicked)}
      className={`
        flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200
        ${clicked
          ? "bg-peach-light text-accent-foreground scale-105"
          : "bg-muted/50 text-muted-foreground hover:bg-muted"
        }
      `}
    >
      <span>{emoji}</span>
      <span>{clicked ? count + 1 : count}</span>
    </button>
  );
};

export default CommunityPage;
