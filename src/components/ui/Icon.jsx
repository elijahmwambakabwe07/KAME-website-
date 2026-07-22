import {
  Search, TrendingUp, MapPin, Sparkles, Monitor, Compass, Megaphone, Target,
  MessageCircle, Workflow, BarChart, ShieldCheck, Eye, Users, Award, Zap,
  CheckCircle2, ArrowRight, Menu, X, Phone, Mail, MapPinned, Clock,
  Facebook, Instagram, Linkedin, ChevronRight, AlertCircle, LogIn, Lock, Crown,
} from "lucide-react";

// TikTok and YouTube are not part of lucide-react's icon set, so they're
// implemented here as small, self-contained SVGs rather than risking an
// import of a brand icon that may not exist in every lucide-react version.
function TikTokIcon({ className = "h-6 w-6", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M16.5 3c.4 2.1 1.9 3.6 4 3.9v2.9c-1.4 0-2.8-.4-4-1.2v6.6c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .6 0 .9.1v3c-.3-.1-.6-.2-.9-.2-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V3h3z" />
    </svg>
  );
}
function YouTubeIcon({ className = "h-6 w-6", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12l-6.2 3.5Z" />
    </svg>
  );
}

export const iconMap = {
  search: Search,
  "trending-up": TrendingUp,
  "map-pin": MapPin,
  sparkles: Sparkles,
  monitor: Monitor,
  compass: Compass,
  megaphone: Megaphone,
  target: Target,
  "message-circle": MessageCircle,
  workflow: Workflow,
  "bar-chart": BarChart,
  shield: ShieldCheck,
  eye: Eye,
  users: Users,
  award: Award,
  zap: Zap,
  check: CheckCircle2,
  arrow: ArrowRight,
  menu: Menu,
  close: X,
  phone: Phone,
  mail: Mail,
  pin: MapPinned,
  clock: Clock,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  tiktok: TikTokIcon,
  youtube: YouTubeIcon,
  chevronRight: ChevronRight,
  alert: AlertCircle,
  login: LogIn,
  lock: Lock,
  crown: Crown,
};

export function Icon({ name, className = "h-6 w-6", ...props }) {
  const Cmp = iconMap[name] || CheckCircle2;
  return <Cmp className={className} {...props} />;
}

export default Icon;
