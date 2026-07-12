import {
  Search, TrendingUp, MapPin, Sparkles, Monitor, Compass, Megaphone, Target,
  MessageCircle, Workflow, BarChart, ShieldCheck, Eye, Users, Award, Zap,
  CheckCircle2, ArrowRight, Menu, X, Phone, Mail, MapPinned, Clock,
  Facebook, Instagram, Linkedin, ChevronRight, AlertCircle, LogIn,
} from "lucide-react";

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
  chevronRight: ChevronRight,
  alert: AlertCircle,
  login: LogIn,
};

export function Icon({ name, className = "h-6 w-6", ...props }) {
  const Cmp = iconMap[name] || CheckCircle2;
  return <Cmp className={className} {...props} />;
}

export default Icon;
