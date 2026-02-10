import { motion } from "framer-motion";
import { Star, Calendar, Shield, Clock, CreditCard, Video, Award } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    specialization: "Clinical Psychologist",
    rating: 4.9,
    reviews: 128,
    availability: "Available Today",
    price: "$60 / session",
    badge: "Top Rated",
    image: "🧠",
  },
  {
    name: "Dr. James Chen",
    specialization: "Psychiatrist",
    rating: 4.8,
    reviews: 96,
    availability: "Next: Tomorrow 10 AM",
    price: "$75 / session",
    badge: "Specialist",
    image: "💊",
  },
  {
    name: "Dr. Amara Obi",
    specialization: "CBT Therapist",
    rating: 4.9,
    reviews: 214,
    availability: "Available Today",
    price: "$55 / session",
    badge: "Most Popular",
    image: "🌿",
  },
];

const DoctorPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-foreground mb-2">Book a Consultation</h1>
        <p className="text-muted-foreground">Connect with licensed professionals in a safe, secure space 🔒</p>
      </motion.div>

      <div className="space-y-4">
        {doctors.map((doc, i) => (
          <motion.div
            key={doc.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-soft transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-16 h-16 rounded-2xl gradient-calm flex items-center justify-center text-3xl flex-shrink-0 shadow-soft">
                {doc.image}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-bold text-foreground text-lg">{doc.name}</h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-lavender-light text-primary">
                    {doc.badge}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{doc.specialization}</p>

                <div className="flex flex-wrap gap-4 text-sm mb-4">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <Star className="w-4 h-4 text-peach fill-peach" />
                    <span className="font-bold">{doc.rating}</span>
                    <span className="text-muted-foreground">({doc.reviews})</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {doc.availability}
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <CreditCard className="w-4 h-4" />
                    {doc.price}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-hero text-primary-foreground font-bold shadow-soft hover:shadow-glow hover:scale-105 transition-all duration-200 text-sm">
                    <Calendar className="w-4 h-4" />
                    Book Session
                  </button>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-muted text-foreground font-semibold hover:bg-muted/80 transition-all duration-200 text-sm">
                    <Video className="w-4 h-4" />
                    Video Call
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust badges */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-6 mt-10 text-xs text-muted-foreground"
      >
        <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-mint" /> Secure & Encrypted</span>
        <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-lavender" /> Licensed Professionals</span>
        <span className="flex items-center gap-1.5"><CreditCard className="w-4 h-4 text-peach" /> Simple Payments</span>
      </motion.div>
    </div>
  );
};

export default DoctorPage;
