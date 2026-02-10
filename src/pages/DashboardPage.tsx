import { motion } from "framer-motion";
import { Heart, TrendingUp, Lightbulb, Smile, Frown, Meh, Angry, Laugh } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const moodEmojis = [
  { icon: Laugh, label: "Great", color: "text-mint" },
  { icon: Smile, label: "Good", color: "text-sky" },
  { icon: Meh, label: "Okay", color: "text-lavender" },
  { icon: Frown, label: "Low", color: "text-peach" },
  { icon: Angry, label: "Tough", color: "text-rose" },
];

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const calendarMoods = [3, 4, 2, 3, 4, 5, 4, 3, 2, 3, 4, 3, 4, 5, 4, 3, 4, 4, 3, 2, 3, 4, 5, 4, 3, 4, 3, 4];
const moodColors: Record<number, string> = {
  1: "bg-rose/60",
  2: "bg-peach/60",
  3: "bg-lavender/40",
  4: "bg-sky/50",
  5: "bg-mint/60",
};

const chartData = [
  { day: "Mon", mood: 3.2 },
  { day: "Tue", mood: 3.8 },
  { day: "Wed", mood: 2.5 },
  { day: "Thu", mood: 3.5 },
  { day: "Fri", mood: 4.0 },
  { day: "Sat", mood: 4.5 },
  { day: "Sun", mood: 4.2 },
];

const DashboardPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-foreground mb-2">Your Wellness Dashboard</h1>
        <p className="text-muted-foreground">Track your emotional journey 🌱</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {/* Today's Mood */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-2xl bg-card border border-border shadow-card"
        >
          <h3 className="text-sm font-bold text-muted-foreground mb-4">How are you feeling today?</h3>
          <div className="flex justify-between">
            {moodEmojis.map((mood) => (
              <button
                key={mood.label}
                className="flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-muted/60 transition-all duration-200 hover:scale-110 group"
              >
                <mood.icon className={`w-8 h-8 ${mood.color} group-hover:scale-110 transition-transform`} />
                <span className="text-xs font-semibold text-muted-foreground">{mood.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* AI Insight */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-2xl gradient-warmth border border-border shadow-card"
        >
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-5 h-5 text-primary" />
            <h3 className="text-sm font-bold text-foreground">Your AI Insight of the Week</h3>
          </div>
          <p className="text-sm text-foreground leading-relaxed mb-3">
            Your mood has been trending upward this week! 📈 You tend to feel best on days 
            when you chat with the community. Consider making it a daily habit. 💛
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <TrendingUp className="w-4 h-4 text-mint" />
            <span className="font-semibold">+15% improvement this week</span>
          </div>
        </motion.div>
      </div>

      {/* Mood Chart */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-6 rounded-2xl bg-card border border-border shadow-card mb-6"
      >
        <h3 className="text-sm font-bold text-muted-foreground mb-4">Emotional Patterns</h3>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="moodGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(260, 55%, 65%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(260, 55%, 65%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(250, 10%, 50%)" }} />
            <YAxis domain={[1, 5]} hide />
            <Tooltip
              contentStyle={{
                background: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(250, 15%, 90%)",
                borderRadius: "12px",
                boxShadow: "0 4px 20px -4px rgba(0,0,0,0.1)",
                fontSize: 12,
              }}
            />
            <Area
              type="monotone"
              dataKey="mood"
              stroke="hsl(260, 55%, 65%)"
              strokeWidth={3}
              fill="url(#moodGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Mood Calendar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-6 rounded-2xl bg-card border border-border shadow-card mb-6"
      >
        <h3 className="text-sm font-bold text-muted-foreground mb-4">Mood Calendar – February</h3>
        <div className="grid grid-cols-7 gap-2 mb-2">
          {weekDays.map((d) => (
            <div key={d} className="text-center text-xs font-semibold text-muted-foreground">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {calendarMoods.map((mood, i) => (
            <div
              key={i}
              className={`aspect-square rounded-xl ${moodColors[mood]} flex items-center justify-center text-xs font-bold text-foreground/70 hover:scale-110 transition-transform cursor-pointer`}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          {Object.entries(moodColors).map(([level, color]) => (
            <div key={level} className="flex items-center gap-1.5">
              <div className={`w-3 h-3 rounded ${color}`} />
              <span className="text-xs text-muted-foreground">
                {level === "1" ? "Tough" : level === "2" ? "Low" : level === "3" ? "Okay" : level === "4" ? "Good" : "Great"}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Gentle reminder */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center p-6 rounded-2xl gradient-calm"
      >
        <Heart className="w-6 h-6 text-rose mx-auto mb-3 animate-pulse-gentle" />
        <p className="text-sm font-semibold text-foreground">
          Healing takes time. You're doing great. 🌟
        </p>
      </motion.div>
    </div>
  );
};

export default DashboardPage;
