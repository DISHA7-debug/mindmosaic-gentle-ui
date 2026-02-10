import { motion } from "framer-motion";
import { Video, Clock, FileText, Heart, Award, Mic, MicOff, VideoOff, PhoneOff } from "lucide-react";
import { useState } from "react";

const InternPage = () => {
  const [sessionStarted, setSessionStarted] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-foreground mb-2">Intern Therapy Sessions</h1>
        <p className="text-muted-foreground">Supervised, affordable, and genuinely caring support 💛</p>
      </motion.div>

      {/* Therapist card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="p-6 rounded-2xl bg-card border border-border shadow-card mb-6"
      >
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="w-20 h-20 rounded-2xl gradient-warmth flex items-center justify-center text-4xl flex-shrink-0 shadow-soft">
            🌸
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="font-bold text-foreground text-lg">Maya Thompson</h3>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-mint-light text-secondary-foreground">
                <Award className="w-3 h-3" /> Supervised Intern
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-1">M.A. Clinical Psychology · Specializes in Anxiety & Self-esteem</p>
            <p className="text-xs text-muted-foreground mb-4">Supervised by Dr. Rachel Green, PhD</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 50 min session</span>
              <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> Session notes provided</span>
              <span className="flex items-center gap-1.5"><Heart className="w-4 h-4 text-rose" /> 98% positive feedback</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Session area */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-2xl overflow-hidden border border-border shadow-card mb-6"
      >
        {sessionStarted ? (
          <div>
            <div className="aspect-video bg-foreground/5 gradient-calm flex items-center justify-center relative">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full gradient-warmth flex items-center justify-center text-5xl mx-auto mb-4 shadow-soft animate-pulse-gentle">
                  🌸
                </div>
                <p className="text-sm font-semibold text-foreground">Maya Thompson</p>
                <p className="text-xs text-muted-foreground">Connected • 12:34</p>
              </div>
              {/* Session timer */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur text-xs font-bold text-foreground border border-border">
                <Clock className="w-3 h-3 inline mr-1" /> 12:34 / 50:00
              </div>
              {/* Encouragement */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="px-4 py-2 rounded-xl bg-card/90 backdrop-blur border border-border text-xs text-muted-foreground text-center">
                  💛 Remember: This is your safe space. Take your time.
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 p-4 bg-card">
              <button className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                <Mic className="w-5 h-5 text-foreground" />
              </button>
              <button className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                <Video className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={() => setSessionStarted(false)}
                className="p-3 rounded-full bg-destructive hover:bg-destructive/80 transition-colors"
              >
                <PhoneOff className="w-5 h-5 text-destructive-foreground" />
              </button>
            </div>
          </div>
        ) : (
          <div className="p-12 text-center gradient-calm">
            <Video className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">Ready when you are</h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
              Your session with Maya is private, warm, and completely judgment-free.
            </p>
            <button
              onClick={() => setSessionStarted(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl gradient-hero text-primary-foreground font-bold shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Video className="w-5 h-5" />
              Start Session
            </button>
          </div>
        )}
      </motion.div>

      {/* Session notes */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-5 rounded-2xl bg-card border border-border shadow-card"
      >
        <h3 className="text-sm font-bold text-muted-foreground mb-3 flex items-center gap-2">
          <FileText className="w-4 h-4" /> Session Notes
        </h3>
        <textarea
          placeholder="Write your thoughts here... These are just for you."
          className="w-full h-24 bg-muted/30 rounded-xl p-3 text-sm text-foreground placeholder:text-muted-foreground outline-none resize-none border border-border focus:border-primary/50 transition-colors"
        />
      </motion.div>
    </div>
  );
};

export default InternPage;
