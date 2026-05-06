<template>
  <div class="about-view">
    <!-- Hero Section Ultra-Premium -->
    <section class="hero-section position-relative overflow-hidden pt-5 pb-5 bg-dark" @mousemove="handleMouseMove">
      <!-- Background Image with Overlay -->
      <div class="position-absolute top-0 start-0 w-100 h-100">
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=80" alt="African Business Excellence" class="w-100 h-100 object-fit-cover opacity-40">
        <div class="position-absolute top-0 start-0 w-100 h-100 bg-gradient-dark-heavy"></div>
      </div>

      <div class="position-absolute top-0 start-0 w-100 h-100 overflow-hidden pointer-events-none">
        <div class="blob blob-1" :style="blobStyle1"></div>
        <div class="blob blob-2" :style="blobStyle2"></div>
        <!-- Floating Icons Parallax -->
        <div class="floating-icon icon-1" :style="iconStyle1"><i class="bi bi-airplane-fill"></i></div>
        <div class="floating-icon icon-2" :style="iconStyle2"><i class="bi bi-laptop"></i></div>
        <div class="floating-icon icon-3" :style="iconStyle3"><i class="bi bi-building"></i></div>
      </div>
      
      <div class="container position-relative z-index-2 py-5" data-aos="fade-up">
        <div class="row align-items-center mt-5">
          <div class="col-lg-10 mx-auto text-center">
            <h2 class="display-3 fw-black text-white mb-4">L'Excellence <span class="text-gradient">Sans Limites</span></h2>
            <div class="heading-line mx-auto mb-4"></div>
            <p class="lead text-white opacity-75 mx-auto mb-0 fs-4" style="max-width: 800px;">
              Un cabinet d'experts pluridisciplinaire dédié à la performance et à la transformation durable.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Section with Modern Layout -->
    <section class="py-5 bg-white position-relative">
      <div class="container py-5">
        <div class="row g-5 align-items-stretch">
          <div class="col-lg-6" data-aos="fade-right">
            <div class="modern-about-box p-1 rounded-5 bg-gradient-primary h-100">
              <div class="inner-box bg-white p-5 rounded-5 shadow-sm h-100">
                <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 fw-bold">NOTRE IDENTITÉ</span>
                <h3 class="display-6 fw-black mb-4">Bienvenue chez <span class="text-primary">ACoRT-Consulting</span></h3>
                <p class="text-muted fs-5 mb-4">
                  Nous sommes des experts passionnés de l’aviation, de l’habitat et de l’informatique, unis pour offrir un accompagnement stratégique complet.
                </p>
                <p class="text-muted lh-lg mb-4">
                  Notre cabinet se distingue par une expertise multisectorielle unique, intervenant dans des domaines critiques tels que l’<strong>Audit Qualité</strong>, la <strong>Consultation stratégique</strong>, le <strong>Recrutement</strong> de talents, et la <strong>Formation</strong> spécialisée. Nous couvrons également les besoins en <strong>Traduction</strong> multilingue, le secteur du <strong>Bâtiment & Travaux Publics</strong> (BTP), ainsi que la fourniture de <strong>Consommables Informatiques</strong> de haute performance.
                </p>
                <div class="d-flex flex-wrap gap-2 mb-4">
                  <div class="pill-tag px-3 py-1 rounded-pill bg-light small fw-bold text-primary">Audit & Conseil</div>
                  <div class="pill-tag px-3 py-1 rounded-pill bg-light small fw-bold text-primary">BTP & Habitat</div>
                  <div class="pill-tag px-3 py-1 rounded-pill bg-light small fw-bold text-primary">IT Solutions</div>
                  <div class="pill-tag px-3 py-1 rounded-pill bg-light small fw-bold text-primary">Aviation Training</div>
                </div>
                <p class="text-muted lh-lg mb-0">
                  À ACoRT-Consulting, nous croyons que la connaissance est le moteur du succès. C'est pourquoi nous avons développé une plateforme e-learning innovante dédiée à l'aéronautique. Elle permet aux professionnels, qu'ils soient expéditeurs de fret ou personnel au sol, de se former de manière flexible et abordable sur des sujets cruciaux comme le transport des marchandises dangereuses, tout en respectant les exigences réglementaires les plus strictes.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left">
            <div class="d-flex flex-column h-100">
              <!-- New illustration above the grid -->
              <div class="mb-4 position-relative flex-grow-1" style="min-height: 350px;">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" alt="African Professional Team" class="img-fluid rounded-5 shadow-sm h-100 w-100 object-fit-cover">
              </div>

              <div class="row g-3">
                <div class="col-6">
                  <div class="feature-card-modern p-3 rounded-4 shadow-sm text-center h-100">
                    <div class="icon-glow-box mb-2 mx-auto scale-08">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </div>
                    <h6 class="fw-black small mb-1">SÉCURITÉ</h6>
                    <p class="x-small text-muted mb-0">Rigueur & Normes.</p>
                  </div>
                </div>
                <div class="col-6">
                  <div class="feature-card-modern p-3 rounded-4 shadow-sm text-center h-100">
                    <div class="icon-glow-box blue mb-2 mx-auto scale-08">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    </div>
                    <h6 class="fw-black small mb-1">RÉSEAU</h6>
                    <p class="x-small text-muted mb-0">Impact Global.</p>
                  </div>
                </div>
                <div class="col-6">
                  <div class="feature-card-modern p-3 rounded-4 shadow-sm text-center h-100">
                    <div class="icon-glow-box green mb-2 mx-auto scale-08">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    </div>
                    <h6 class="fw-black small mb-1">PROJETS</h6>
                    <p class="x-small text-muted mb-0">De A à Z.</p>
                  </div>
                </div>
                <div class="col-6">
                  <div class="feature-card-modern p-3 rounded-4 shadow-sm text-center h-100">
                    <div class="icon-glow-box yellow mb-2 mx-auto scale-08">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <h6 class="fw-black small mb-1">HUMAIN</h6>
                    <p class="x-small text-muted mb-0">Talents.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Values Section -->
    <section class="py-5 bg-dark position-relative overflow-hidden">
      <div class="container py-5">
        <div class="row mb-5 text-center" data-aos="fade-up">
          <div class="col-lg-6 mx-auto">
            <h2 class="display-5 fw-black text-white mb-3">Nos Moteurs de <span class="text-gradient">Succès</span></h2>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-lg-4" v-for="(value, idx) in values" :key="idx" data-aos="fade-up" :data-aos-delay="idx * 100">
            <div class="value-card-premium p-5 rounded-5 h-100" @mousemove="handleCardMove($event, idx)" @mouseleave="resetCard(idx)">
              <div class="value-glow" :style="value.glowStyle"></div>
              <div class="value-content position-relative z-index-2">
                <div class="value-number mb-3 text-gradient opacity-50 fw-black">0{{ idx + 1 }}</div>
                <h4 class="fw-black text-white mb-3">{{ value.title }}</h4>
                <p class="text-white opacity-50 mb-0">{{ value.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      values: [
        { title: 'Excellence', desc: 'Nous visons l\'excellence opérationnelle pour garantir la réussite totale de nos clients.', glowStyle: {} },
        { title: 'Croissance', desc: 'Un impact positif et mesurable sur la performance des organisations.', glowStyle: {} },
        { title: 'Durabilité', desc: 'Focus permanent sur le développement durable et l\'éthique humaine.', glowStyle: {} }
      ]
    }
  },
  computed: {
    blobStyle1() {
      return { transform: `translate(${this.mouseX * 20}px, ${this.mouseY * 20}px)` }
    },
    blobStyle2() {
      return { transform: `translate(${this.mouseX * -20}px, ${this.mouseY * -20}px)` }
    },
    iconStyle1() { return { transform: `translate(${this.mouseX * 40}px, ${this.mouseY * 40}px)` } },
    iconStyle2() { return { transform: `translate(${this.mouseX * -30}px, ${this.mouseY * -30}px)` } },
    iconStyle3() { return { transform: `translate(${this.mouseX * 50}px, ${this.mouseY * -50}px)` } }
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = (e.clientX / window.innerWidth) - 0.5;
      this.mouseY = (e.clientY / window.innerHeight) - 0.5;
    },
    handleCardMove(e, idx) {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      this.values[idx].glowStyle = {
        background: `radial-gradient(circle at ${x}px ${y}px, rgba(69, 130, 255, 0.4) 0%, transparent 70%)`
      };
    },
    resetCard(idx) {
      this.values[idx].glowStyle = { opacity: 0 };
    }
  }
}
</script>

<style scoped>
.hero-section {
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.fw-black { font-weight: 900 !important; }
.mt-n3 { margin-top: -1.5rem !important; }

.outline-text {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
  color: transparent;
  letter-spacing: 15px;
  font-size: 6rem;
}

.text-gradient {
  background: linear-gradient(135deg, #4582FF 0%, #39B54A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.heading-line {
  width: 100px;
  height: 6px;
  background: linear-gradient(90deg, #4582FF, #39B54A);
  border-radius: 10px;
}

/* Floating Elements */
.blob {
  position: absolute;
  width: 600px;
  height: 600px;
  background: rgba(69, 130, 255, 0.3);
  filter: blur(100px);
  border-radius: 50%;
  z-index: 0;
}
.blob-1 { top: -20%; left: -10%; }
.blob-2 { bottom: -20%; right: -10%; background: rgba(57, 181, 74, 0.2); }

.floating-icon {
  position: absolute;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.1);
  z-index: 1;
}
.icon-1 { top: 20%; left: 15%; }
.icon-2 { bottom: 25%; left: 20%; }
.icon-3 { top: 30%; right: 15%; }

/* Content Styling */
.modern-about-box {
  background: linear-gradient(135deg, #4582FF, #39B54A);
}
.pill-tag {
  border: 1px solid rgba(0,0,0,0.05);
}

.feature-card-modern {
  background: white;
  border: 1px solid rgba(0,0,0,0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.feature-card-modern:hover {
  transform: scale(1.05) translateY(-5px);
  border-color: #4582FF;
}

.icon-glow-box {
  width: 60px;
  height: 60px;
  background: rgba(69, 130, 255, 0.1);
  color: #4582FF;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-glow-box.blue { background: rgba(0, 123, 255, 0.1); color: #007bff; }
.icon-glow-box.green { background: rgba(40, 167, 69, 0.1); color: #28a745; }
.icon-glow-box.yellow { background: rgba(255, 193, 7, 0.1); color: #ffc107; }

/* Value Cards Premium */
.value-card-premium {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease;
}
.value-card-premium:hover {
  border-color: rgba(69, 130, 255, 0.3);
}
.value-glow {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.value-number {
  font-size: 3rem;
}

.bg-gradient-dark-heavy {
  background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%);
}

.z-index-2 { z-index: 2; }
.scale-08 { transform: scale(0.8); }
.tracking-tighter { letter-spacing: -1px; }
.x-small { font-size: 0.75rem; }
</style>
