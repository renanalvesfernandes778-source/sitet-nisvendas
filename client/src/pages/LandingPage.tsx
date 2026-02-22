import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Star, Shield, Truck, ThumbsUp, Menu, X, Clock, ShieldCheck, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { LeadForm } from "@/components/LeadForm";
import { CountdownTimer } from "@/components/CountdownTimer";

// Assets - Using public/images for Vercel compatibility
const heroImage = "/images/15_1771449544431.jpg";
const detail1 = "/images/06_1771449544432.jpg";
const detail2 = "/images/02_1771449544432.png";
const detail3 = "/images/000_1771449544433.jpg";
const extraImage1 = "/images/01_1771449544432.png";
const extraImage2 = "/images/01_1771449544432.jpg";
const extraImage3 = "/images/00_1771449544433.jpg";

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const [scrolled, setScrolled] = useState(false);
  const [combo, setCombo] = useState("2");
  const [size1, setSize1] = useState("37");
  const [size2, setSize2] = useState("37");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCheckout = () => {
    const checkoutUrl = combo === "2" 
      ? import.meta.env.VITE_CHECKOUT_LINK_128_00 
      : import.meta.env.VITE_CHECKOUT_LINK_99_90;
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  };

  const topPrice = "99,90";

  const sizes = ["34", "35", "36", "37", "38", "39"];

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-primary/20">
      {/* Sticky Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-primary font-display uppercase italic">
            OUTLET <span className="text-gray-900">CONFORTO</span> ORTOPÉDICO
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Benefícios</a>
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Tecnologia</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Depoimentos</a>
            <Button onClick={handleCheckout} className="bg-accent hover:bg-accent/90 text-white font-bold rounded-full px-6">
              Comprar Agora
            </Button>
          </div>

          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                <a href="#benefits" className="text-lg font-medium">Benefícios</a>
                <a href="#features" className="text-lg font-medium">Tecnologia</a>
                <a href="#reviews" className="text-lg font-medium">Depoimentos</a>
                <Button onClick={handleCheckout} className="bg-accent text-white font-bold w-full">
                  Comprar Agora
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 -skew-x-12 translate-x-1/4 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary font-semibold text-sm mb-6 border border-blue-100">
                <ShieldCheck className="w-4 h-4" /> Recomendado por Ortopedistas
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                Conforto Absoluto para seus <span className="text-primary">Pés</span>.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                Desenvolvido com tecnologia de amortecimento avançada para alívio imediato de dores e correção da postura. Sinta a diferença a cada passo.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-red-600">R$ {topPrice}</span>
                  <span className="text-lg text-gray-400 line-through">R$ 199,90</span>
                </div>
                <div className="bg-red-100 text-red-600 px-3 py-1 rounded-md font-bold text-sm uppercase tracking-wide animate-pulse-slow">
                  Economize R$ 79,90
                </div>
              </div>
                <Clock className="w-4 h-4 text-red-600" />
                <span>A oferta encerra em: <span className="text-red-600">14min 22s</span></span>
                <div className="flex flex-col gap-4 mt-8">
                      {/* Botão de 1 Unidade - R$ 99,90 */}
                      <a href="https://app.coinzz.com.br/checkout/1-unidade-ljeta-0" target="_blank" rel="noopener noreferrer" className="w-full block">
                        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg font-bold px-8 py-6 rounded-xl shadow-lg w-full animate-pulse">
                          Garantir 1 Par Agora <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </a>

                      {/* Botão de 2 Unidades - R$ 128,00 */}
                      <a href="https://app.coinzz.com.br/checkout/2-unidade-z51sh-0" target="_blank" rel="noopener noreferrer" className="w-full block">
                        <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 text-lg font-bold px-8 py-6 rounded-xl w-full">
                          Levar 2 Pares (Promoção) <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </a>
                     </div>
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

      {/* Social Proof Real - Marketplace Style */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Avaliações de Clientes</h2>
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">R</div>
              <div>
                <div className="font-bold text-gray-900">regiacsilva</div>
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-700 mb-4 italic leading-relaxed">
              "Eu calço 37/38, pedi tamanho 37 e ficou perfeito no pé. Chegou bem embalado e em perfeito estado."
            </p>
            <div className="rounded-lg overflow-hidden border border-gray-100">
              <img src="/images/regiacsilva.jpeg" alt="Feedback regiacsilva" className="w-full h-auto max-w-md mx-auto" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { name: "julianacotinovis", img: "/images/review2.jpeg", text: "Eu estou APAIXONADA. Simplesmente maravilhoso..." },
              { name: "ellen0197", img: "/images/review3.jpeg", text: "Bem bonito, eu pedi um número a mais..." },
              { name: "annynhagaspar35", img: "/images/review4.jpeg", text: "Produto de ótima qualidade adoreiiiiii..." }
            ].map((rev, i) => (
              <div key={i} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">{rev.name[0].toUpperCase()}</div>
                  <div className="text-xs font-bold">{rev.name}</div>
                </div>
                <div className="flex text-yellow-400 text-[10px] mb-2">★★★★★</div>
                <p className="text-[11px] text-gray-600 mb-3 line-clamp-2">"{rev.text}"</p>
                <img src={rev.img} alt={`Review ${i}`} className="w-full h-24 object-cover rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Seus Pés Doem Após um Longo Dia?
            </h2>
            <p className="text-lg text-gray-600">
              Você não está sozinho. 78% dos adultos sofrem com dores nos pés, fascite plantar ou desconforto nos joelhos causado por calçados inadequados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Fascite Plantar", desc: "Dor aguda no calcanhar que torna cada passo uma agonia.", icon: "🦶" },
              { title: "Dores no Joelho e Costas", desc: "O desalinhamento começa nos pés e afeta todo o seu corpo.", icon: "🦴" },
              { title: "Inchaço e Fadiga", desc: "Má circulação levando a pernas pesadas e cansadas ao final do dia.", icon: "⚡" }
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
                A Tecnologia
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Engenharia para Conforto <span className="text-primary">Absoluto</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Nossa tecnologia de solado absorve o impacto enquanto corrige sua pisada, proporcionando liberdade para caminhar o dia todo sem dor.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Suporte de Arco Ergonômico", desc: "Alinha os pés para uma posição neutra." },
                  { title: "Solado com Absorção de Choque", desc: "Reduz o impacto nos joelhos e articulações." },
                  { title: "Mesh Respirável", desc: "Mantém os pés frescos e secos o dia todo." },
                  { title: "Grip Antiderrapante", desc: "Estabilidade total em qualquer superfície." }
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
               <img src={detail1} alt="Detalhe do solado" className="rounded-2xl shadow-2xl transform translate-y-8 object-cover aspect-square" />
               <img src={detail2} alt="Vista lateral" className="rounded-2xl shadow-2xl transform -translate-y-8 object-cover aspect-square" />
               <div className="col-span-2">
                 <img src={detail3} alt="Infográfico de detalhes" className="w-full h-auto object-contain rounded-2xl shadow-2xl" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Por que Milhares Escolhem o Tênis Ortopédico</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Alívio de Dores", icon: <Shield className="w-8 h-8 text-primary" /> },
              { title: "Melhor Postura", icon: <Check className="w-8 h-8 text-primary" /> },
              { title: "Conforto Diário", icon: <Star className="w-8 h-8 text-primary" /> },
              { title: "Mobilidade Ampliada", icon: <ArrowRight className="w-8 h-8 text-primary" /> }
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
          <h2 className="text-3xl font-bold text-center mb-12">Pessoas Reais, Resultados Reais</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Maria S.", quote: "Melhor tênis que já comprei! Minha dor de fascite plantar sumiu em 2 dias. Posso caminhar sem sentir pontadas.", role: "Enfermeira" },
              { name: "João P.", quote: "Finalmente, sem mais dores nas costas e pés. Fico 8 horas em pé na escola e chego em casa descansado. 100% recomendado!", role: "Professor" },
              { name: "Ana L.", quote: "Elegante para o trabalho e o conforto é inexplicável. Minhas dores crônicas nos pés simplesmente acabaram!", role: "Gerente de Vendas" }
            ].map((review, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl relative border border-gray-100 shadow-sm">
                <div className="absolute -top-4 left-8 text-6xl text-primary/20 font-serif">"</div>
                <div className="flex text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-700 mb-6 italic relative z-10">{review.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
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
                  <h3 className="text-2xl font-bold mb-1">Garantia de Satisfação de 30 Dias</h3>
                  <p className="text-gray-300">Experimente sem riscos. Se você não amar, devolvemos 100% do seu dinheiro.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA / Order Section */}
      <section id="order-form" className="py-20 bg-gradient-to-br from-blue-50 to-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 italic uppercase font-display">Escolha sua Oferta</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
              <div className="inline-flex items-center gap-2 text-red-600 font-bold uppercase tracking-wider text-sm animate-pulse">
                <Clock className="w-4 h-4" /> Oferta por Tempo Limitado
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <RadioGroup value={combo} onValueChange={setCombo} className="space-y-4">
                  <div 
                    className={`relative flex items-center justify-between p-6 rounded-2xl border-2 transition-all cursor-pointer ${combo === "1" ? "border-primary bg-blue-50/50" : "border-gray-100 hover:border-gray-200"}`}
                    onClick={() => setCombo("1")}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupItem value="1" id="r1" />
                      <Label htmlFor="r1" className="text-lg font-bold cursor-pointer">Leve 1 Tênis</Label>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-gray-900">R$ 99,90</div>
                    </div>
                  </div>

                  <div 
                    className={`relative flex items-center justify-between p-6 rounded-2xl border-2 transition-all cursor-pointer ${combo === "2" ? "border-accent bg-accent/5 shadow-md" : "border-gray-100 hover:border-gray-200"}`}
                    onClick={() => setCombo("2")}
                  >
                    <div className="absolute -top-3 left-6 bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Mais Vendido</div>
                    <div className="flex items-center gap-4">
                      <RadioGroupItem value="2" id="r2" />
                      <div className="flex flex-col">
                        <Label htmlFor="r2" className="text-lg font-bold cursor-pointer text-accent">PROMOÇÃO: Leve 2 Tênis</Label>
                        <span className="text-xs text-gray-500 font-medium">Economia Máxima</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-accent">R$ 128,00</div>
                      <div className="text-xs text-gray-400 line-through">R$ 199,80</div>
                    </div>
                  </div>
                </RadioGroup>

                <div className="space-y-4 pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Truck className="w-4 h-4 text-green-600" />
                    <span>Entrega Garantida via Correios</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span>Pagamento 100% Seguro</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-primary" /> Selecione o Tamanho
                </h3>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-bold text-gray-700">{combo === "2" ? "Tamanho do Tênis 1:" : "Tamanho do Tênis:"}</Label>
                    <Select value={size1} onValueChange={setSize1}>
                      <SelectTrigger className="bg-white border-gray-200 h-12 rounded-xl">
                        <SelectValue placeholder="Selecione o tamanho" />
                      </SelectTrigger>
                      <SelectContent>
                        {sizes.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  <AnimatePresence>
                    {combo === "2" && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2 overflow-hidden"
                      >
                        <Label className="text-sm font-bold text-gray-700">Tamanho do Tênis 2:</Label>
                        <Select value={size2} onValueChange={setSize2}>
                          <SelectTrigger className="bg-white border-gray-200 h-12 rounded-xl">
                            <SelectValue placeholder="Selecione o tamanho" />
                          </SelectTrigger>
                          <SelectContent>
                            {sizes.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Button 
                    onClick={handleCheckout}
                    className="w-full bg-accent hover:bg-accent/90 text-white text-xl font-black py-8 rounded-2xl shadow-xl shadow-accent/20 transition-all hover:-translate-y-1 active:scale-95 animate-pulse mt-4 uppercase italic tracking-tighter"
                  >
                    Finalizar Compra <ArrowRight className="ml-2 w-6 h-6" />
                  </Button>
                  
                  <div className="text-center">
                    <p className="text-[10px] text-gray-400 font-medium">🔒 Transação criptografada e 100% segura.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-black tracking-tighter text-white mb-4 font-display uppercase italic">
            OUTLET <span className="text-primary">CONFORTO</span> ORTOPÉDICO
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6 text-sm font-medium text-gray-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span>🔒 Site Seguro - Criptografia SSL</span>
            </div>
            <div className="flex items-center gap-2">
              <ThumbsUp className="w-5 h-5 text-primary" />
              <span>Garantia de Satisfação: 30 dias ou seu dinheiro de volta</span>
            </div>
          </div>
          <p className="mb-8 text-xs text-gray-500">
            © 2024 Outlet Conforto Ortopédico. Todos os direitos reservados.<br/>
            Caminhar nas nuvens nunca foi tão acessível.
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
