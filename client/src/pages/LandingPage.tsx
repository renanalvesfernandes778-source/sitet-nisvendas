import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, Star, Shield, Truck, ThumbsUp, Menu, X, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LeadForm } from "@/components/LeadForm";
import { CountdownTimer } from "@/components/CountdownTimer";

// Assets
import heroImage from "@assets/S8f86edd088344e7584d3ef4a960af7eam_800x_1771375984703.webp";
import detail1 from "@assets/S463b89bd82a146a6bc9b372d3db10813w_800x_1771375984707.webp";
import detail2 from "@assets/image_1771376016224.png";
import detail3 from "@assets/image_1771376027942.png";

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCheckout = () => {
    window.location.href = "https://app.coinzz.com.br/checkout/2-unidade-tzlyj-0";
  };

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-primary/20">
      {/* Sticky Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-primary">
            ORTHO<span className="text-gray-900">PRO</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Benefits</a>
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Reviews</a>
            <Button onClick={handleCheckout} className="bg-accent hover:bg-accent/90 text-white font-bold rounded-full px-6">
              Buy Now
            </Button>
          </div>

          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                <a href="#benefits" className="text-lg font-medium">Benefits</a>
                <a href="#features" className="text-lg font-medium">Features</a>
                <a href="#reviews" className="text-lg font-medium">Reviews</a>
                <Button onClick={handleCheckout} className="bg-accent text-white font-bold w-full">
                  Buy Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100/50 -skew-x-12 translate-x-1/4 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary font-semibold text-sm mb-6">
                <Star className="w-4 h-4 fill-current" /> #1 Rated Orthopedic Shoe 2024
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-gray-900 leading-[1.1] mb-6">
                Say Goodbye to <span className="text-primary">Foot Pain</span> & Hello to Comfort.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                Experience cloud-like comfort with the specialized orthopedic design that corrects posture and relieves pain instantly.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900">R$136,50</span>
                  <span className="text-lg text-gray-400 line-through">R$199,80</span>
                </div>
                <div className="bg-red-100 text-red-600 px-3 py-1 rounded-md font-bold text-sm uppercase tracking-wide animate-pulse-slow">
                  Economize R$63,30
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleCheckout}
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white text-lg font-bold px-8 py-6 rounded-xl shadow-lg shadow-accent/25 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  Get Yours Today <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <div className="flex items-center gap-4 text-sm font-medium text-gray-500 py-3 px-4">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex text-yellow-400 text-xs">★★★★★</div>
                    <span>4,900+ Happy Walkers</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10 animate-float">
                <img 
                  src={heroImage} 
                  alt="Orthopedic Shoe Hero" 
                  className="w-full h-auto drop-shadow-2xl rounded-3xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating feature badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute top-10 -right-4 bg-white p-4 rounded-xl shadow-xl z-20 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Pain Relief</div>
                    <div className="text-xs text-gray-500">Instant Comfort</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Do Your Feet Ache After a Long Day?
            </h2>
            <p className="text-lg text-gray-600">
              You're not alone. 78% of adults suffer from foot pain, plantar fasciitis, or knee discomfort caused by improper footwear. It drains your energy and limits your life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Plantar Fasciitis", desc: "Sharp heel pain that makes every step agony.", icon: "🦶" },
              { title: "Knee & Back Pain", desc: "Misalignment starting from your feet affecting your whole body.", icon: "🦴" },
              { title: "Swelling & Fatigue", desc: "Poor circulation leading to heavy, tired legs by evening.", icon: "⚡" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-red-200 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution / Features Section */}
      <section id="features" className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
                The Technology
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Engineered for <span className="text-primary">Cloud-Like</span> Comfort
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Our proprietary sole technology absorbs shock while correcting your stride, giving you the freedom to walk all day without pain.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Ergonomic Arch Support", desc: "Aligns feet to neutral position." },
                  { title: "Shock Absorption Sole", desc: "Reduces impact on knees and joints." },
                  { title: "Breathable Mesh", desc: "Keeps feet cool and dry all day." },
                  { title: "Non-Slip Grip", desc: "Stability on any surface." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{feature.title}</h4>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <img src={detail1} alt="Detail view" className="rounded-2xl shadow-2xl transform translate-y-8" />
               <img src={detail2} alt="Sole view" className="rounded-2xl shadow-2xl transform -translate-y-8" />
               <div className="col-span-2">
                 <img src={detail3} alt="Side view" className="w-full h-48 object-cover rounded-2xl shadow-2xl" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Why Thousands Choose OrthoPro</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Pain Relief", icon: <Shield className="w-8 h-8 text-primary" /> },
              { title: "Better Posture", icon: <Check className="w-8 h-8 text-primary" /> },
              { title: "All-Day Comfort", icon: <Star className="w-8 h-8 text-primary" /> },
              { title: "Improved Mobility", icon: <ArrowRight className="w-8 h-8 text-primary" /> }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md border-b-4 border-primary text-center"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900">{benefit.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Real People, Real Relief</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Maria S.", quote: "Best shoes I've ever bought! My plantar fasciitis pain vanished in 2 days.", role: "Nurse" },
              { name: "Joao P.", quote: "Finally, no more back pain. I can stand for 8 hours without feeling destroyed.", role: "Teacher" },
              { name: "Ana L.", quote: "Stylish enough for work, comfortable enough for a marathon. Obsessed!", role: "Retail Manager" }
            ].map((review, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl relative">
                <div className="absolute -top-4 left-8 text-6xl text-primary/20 font-serif">"</div>
                <div className="flex text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-700 mb-6 italic relative z-10">{review.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-600">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{review.name}</div>
                    <div className="text-xs text-gray-500">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-12 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="inline-block p-6 border-2 border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm">
             <div className="flex flex-col md:flex-row items-center gap-6">
                <ShieldCheck className="w-16 h-16 text-primary" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-1">15-Day Money-Back Guarantee</h3>
                  <p className="text-gray-300">Try them risk-free. If you don't love them, we'll refund you 100%.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA / Order Section */}
      <section id="order-form" className="py-20 bg-gradient-to-br from-blue-50 to-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            
            {/* Left Side: Offer Details */}
            <div className="md:w-1/2 p-8 md:p-12 bg-gray-50">
              <div className="inline-flex items-center gap-2 text-red-600 font-bold uppercase tracking-wider text-sm mb-4 animate-pulse">
                <Clock className="w-4 h-4" /> Limited Time Offer
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Final Sale Price</h2>
              
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-5xl font-black text-primary">R$136,50</span>
                <span className="text-xl text-gray-400 line-through">R$273,00</span>
              </div>

              <div className="mb-8">
                <div className="text-sm font-semibold text-gray-600 mb-2">Offer expires in:</div>
                <CountdownTimer />
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Truck className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-700">Free Fast Shipping</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <ThumbsUp className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-gray-700">100% Satisfaction Guarantee</span>
                </div>
              </div>

              <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg text-orange-800 text-sm font-medium flex items-start gap-2">
                <span className="text-xl">🔥</span> 
                <span>High demand! Only 12 pairs left at this price.</span>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="md:w-1/2">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-black tracking-tighter text-white mb-6">
            ORTHO<span className="text-primary">PRO</span>
          </div>
          <p className="mb-8 text-sm">
            © 2024 OrthoPro Shoes. All rights reserved.<br/>
            Walking on clouds has never been this affordable.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
