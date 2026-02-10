import { motion } from "framer-motion";
import { MessageCircle, Users, UserCheck, CalendarHeart, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-illustration.png";

const quickActions = [
  {
    label: "Start AI Chat",
    desc: "Talk to a caring AI companion",
    icon: MessageCircle,
    path: "/chat",
    color: "bg-lavender-light text-primary",
    border: "border-lavender/30",
  },
  {
    label: "Join Community",
    desc: "You're not alone in this",
    icon: Users,
    path: "/community",
    color: "bg-mint-light text-secondary-foreground",
    border: "border-mint/30",
  },
  {
    label: "Talk to an Intern",
    desc: "Supervised therapy sessions",
    icon: UserCheck,
    path: "/intern",
    color: "bg-peach-light text-accent-foreground",
    border: "border-peach/30",
  },
  {
    label: "Book a Doctor",
    desc: "Professional consultations",
    icon: CalendarHeart,
    path: "/doctor",
    color: "bg-sky-light text-foreground",
    border: "border-sky/30",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-calm opacity-60" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8 md:pt-20 md:pb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lavender-light text-primary text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                You're not alone
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
                Your mind matters.{" "}
                <span className="text-primary">Let's talk.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
                MindMosaic is your safe space for mental wellness. Chat with AI, connect with 
                caring professionals, and join a community that truly understands.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/chat"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl gradient-hero text-primary-foreground font-bold shadow-glow hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start Chatting
                </Link>
                <Link
                  to="/community"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-card text-foreground font-bold shadow-card border border-border hover:shadow-soft transition-all duration-300 hover:scale-105"
                >
                  <Heart className="w-5 h-5 text-rose" />
                  Join Community
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <img
                src={heroImage}
                alt="Mental wellness illustration with soft waves and hearts"
                className="w-full rounded-3xl shadow-soft"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            How can we help today?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Take the first step. Every journey begins with a single, brave moment.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {quickActions.map((action) => (
            <motion.div key={action.label} variants={fadeUp}>
              <Link
                to={action.path}
                className={`
                  group block p-6 rounded-2xl bg-card border ${action.border} shadow-card
                  hover:shadow-soft hover:-translate-y-1 transition-all duration-300
                `}
              >
                <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{action.label}</h3>
                <p className="text-sm text-muted-foreground">{action.desc}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Gentle reminder */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        <motion.div
          className="text-center p-8 rounded-3xl gradient-warmth"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Heart className="w-8 h-8 text-rose mx-auto mb-4 animate-pulse-gentle" />
          <p className="text-lg font-semibold text-foreground">
            "Healing takes time. You're doing great." 💛
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Remember: asking for help is a sign of strength, not weakness.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
