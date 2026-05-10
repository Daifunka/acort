<template>
  <div class="aviation-service-view bg-white overflow-hidden">
    <!-- Immersive Hero Section -->
    <section class="hero-aviation position-relative d-flex align-items-center justify-content-center" @mousemove="handleMouseMove" ref="hero">
      <div class="parallax-bg" :style="{ transform: `translate(${mouseX * -20}px, ${mouseY * -20}px) scale(1.1)` }">
        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80" alt="Aviation Training" class="w-100 h-100 object-fit-cover opacity-50">
        <div class="position-absolute top-0 start-0 w-100 h-100 bg-gradient-navy"></div>
      </div>
      
      <div class="container position-relative z-index-2 text-center mt-5 pt-5">
        <div class="d-inline-flex align-items-center px-4 py-2 rounded-pill bg-white bg-opacity-10 backdrop-blur border border-white border-opacity-25 mb-4 shadow-sm" data-aos="fade-down">
          <span class="text-white fw-bold text-uppercase tracking-widest small">ACoRT Consulting - Aviation</span>
        </div>
        <div class="mb-5" data-aos="zoom-in">
          <h1 class="display-3 fw-black text-white mb-2 lh-1">FORMATION PRO EN</h1>
          <div class="display-1 text-primary fw-black mt-n1 lh-1 text-gradient-blue">AVIATION</div>
        </div>
        <p class="lead text-white opacity-75 fs-4 mx-auto mb-5" style="max-width: 800px;" data-aos="fade-up" data-aos-delay="200">
          Des solutions clés en main pour vos objectifs de carrière dans l'aviation civile et commerciale.
        </p>
        <div class="d-flex justify-content-center gap-3" data-aos="fade-up" data-aos-delay="400">
          <a href="https://formation.acort-consulting.com" target="_blank" class="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg">DÉCOUVRIR NOS FORMATIONS <i class="bi bi-box-arrow-up-right ms-2"></i></a>
        </div>
      </div>
      
      <div class="scroll-indicator position-absolute bottom-0 start-50 translate-middle-x mb-4 text-white opacity-50">
        <i class="bi bi-chevron-down fs-4 bounce"></i>
      </div>
    </section>

    <!-- Presentation Section -->
    <section id="presentation" class="py-5 bg-white position-relative z-index-3 mt-n5 rounded-top-5 shadow-lg">
      <div class="container py-5">
        <div class="row align-items-center g-5">
          <div class="col-lg-6" data-aos="fade-right">
            <h2 class="display-5 fw-black text-dark mb-4">L'Excellence au service de votre <span class="text-primary">carrière</span></h2>
            <p class="text-muted fs-5 lh-lg mb-4">
              Notre centre de formation en ligne est doté de l’expérience, de l’expertise et des connaissances nécessaires pour vous propulser. Nous disposons d’une gamme de produits de simulateurs et de capacités de prestation de services visant à fournir à nos clients des solutions clés pour leurs différents objectifs.
            </p>
            <div class="row g-3">
              <div class="col-6" v-for="(stat, idx) in stats" :key="idx">
                <div class="p-3 border-start border-4 border-primary bg-light rounded-end">
                  <div class="fw-black fs-3 text-dark mb-0">{{ stat.value }}</div>
                  <div class="small text-muted fw-bold text-uppercase">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left">
            <div class="position-relative p-4">
              <div class="rounded-5 overflow-hidden shadow-2xl rotate-2">
                <img src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80" alt="Flight Simulator" class="img-fluid">
              </div>
              <div class="position-absolute top-0 start-0 m-2 p-4 bg-primary rounded-4 shadow-lg text-white -rotate-3 z-index-2 d-none d-md-block">
                <i class="bi bi-cpu display-4 mb-2 d-block"></i>
                <h5 class="fw-bold mb-0">Simulateurs de pointe</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Strengths Section -->
    <section class="py-5 bg-light">
      <div class="container py-5">
        <div class="row g-4 justify-content-center">
          <div class="col-md-6 col-lg-3" v-for="(strength, index) in strengths" :key="index" data-aos="fade-up" :data-aos-delay="index * 100">
            <div class="strength-card p-4 rounded-4 bg-white shadow-sm h-100 text-center border border-transparent hover-border-primary transition-all">
              <div class="icon-circle mb-4 mx-auto" :class="strength.bg">
                <i :class="['bi', strength.icon, 'fs-2']"></i>
              </div>
              <h5 class="fw-bold mb-3">{{ strength.title }}</h5>
              <p class="text-muted small mb-0">{{ strength.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Expertise Domains Section -->
    <section id="expertise" class="py-5 bg-white">
      <div class="container py-5">
        <div class="text-center mb-5" data-aos="fade-up">
          <h6 class="text-primary fw-bold tracking-widest mb-2 text-uppercase">Nos Domaines de Formation</h6>
          <h2 class="display-5 fw-black text-dark">Une Expertise Pluridisciplinaire</h2>
          <div class="heading-line mx-auto"></div>
        </div>

        <div class="row g-5">
          <!-- Pôle Opérationnel -->
          <div class="col-lg-6" data-aos="fade-right">
            <div class="expertise-box p-5 rounded-5 bg-dark text-white h-100 position-relative overflow-hidden shadow-2xl">
              
              <h3 class="fw-black mb-4 d-flex align-items-center">
                <span class="p-2 bg-primary rounded-3 me-3"><i class="bi bi-gear-fill fs-4"></i></span>
                Pôle Opérationnel & Réglementaire
              </h3>
              <p class="opacity-75 mb-4">Formations axées sur la sécurité, la sûreté et la conformité internationale IATA.</p>
              <ul class="list-unstyled mb-0">
                <li class="d-flex align-items-center mb-3">
                  <i class="bi bi-check2-circle text-primary me-3 fs-5"></i>
                  <span>Réglementation IATA CBTA (Marchandises Dangereuses)</span>
                </li>
                <li class="d-flex align-items-center mb-3">
                  <i class="bi bi-check2-circle text-primary me-3 fs-5"></i>
                  <span>Sûreté de l'Aviation Civile (AVSEC)</span>
                </li>
                <li class="d-flex align-items-center mb-3">
                  <i class="bi bi-check2-circle text-primary me-3 fs-5"></i>
                  <span>Sécurité sur l'aire de trafic & Facteurs Humains</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="bi bi-check2-circle text-primary me-3 fs-5"></i>
                  <span>Transport d'Animaux Vivants & Gestion ULD</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Pôle Commercial -->
          <div class="col-lg-6" data-aos="fade-left">
            <div class="expertise-box p-5 rounded-5 bg-light border h-100 position-relative overflow-hidden shadow-sm">
              
              <h3 class="fw-black text-dark mb-4 d-flex align-items-center">
                <span class="p-2 bg-white shadow-sm rounded-3 me-3 text-primary"><i class="bi bi-briefcase-fill fs-4"></i></span>
                Pôle Commercial & Management
              </h3>
              <p class="text-muted mb-4">Programmes dédiés aux métiers de la vente, du tourisme et de l'administration hôtelière.</p>
              <div class="row g-2">
                <div class="col-sm-6" v-for="(item, idx) in commercialItems" :key="idx">
                  <div class="d-flex align-items-center p-3 bg-white rounded-3 border shadow-sm h-100">
                    <i class="bi bi-arrow-right-short text-primary me-2 fs-4"></i>
                    <span class="small fw-bold text-dark">{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-navy-gradient position-relative overflow-hidden">
      <div class="container py-5 position-relative z-index-2">
        <div class="row justify-content-center">
          <div class="col-lg-10 text-center" data-aos="zoom-in">
            <h2 class="display-5 fw-black text-white mb-4">Passez au niveau supérieur</h2>
            <p class="lead text-white opacity-75 mb-5 mx-auto" style="max-width: 800px;">
              Notre plateforme e-learning regroupe l'intégralité de nos modules. De la billetterie à la réglementation IATA, formez-vous en toute autonomie avec des contenus mis à jour en temps réel.
            </p>
            <div class="d-flex flex-wrap justify-content-center gap-4">
              <a href="https://formation.acort-consulting.com" target="_blank" class="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow-glow scale-hover">
                ACCÉDER AU PORTAIL E-LEARNING <i class="bi bi-rocket-takeoff ms-2"></i>
              </a>
              <router-link to="/contact" class="btn btn-outline-light btn-lg rounded-pill px-5 py-3 fw-bold backdrop-blur">
                DEMANDER UNE ÉTUDE SUR-MESURE
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- Decorative background elements -->
      <div class="position-absolute top-50 start-0 translate-middle-y opacity-10 ps-5 d-none d-lg-block">
        <i class="bi bi-airplane display-1 text-white rotate-45"></i>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AviationServiceView',
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      stats: [
        { value: '15+', label: 'Ans d\'expertise' },
        { value: '98%', label: 'Taux de réussite' },
        { value: '24/7', label: 'Accès en ligne' },
        { value: 'IATA', label: 'Conformité Mondiale' }
      ],
      strengths: [
        { title: 'Formation en ligne', desc: 'Accédez à vos cours partout dans le monde, 24h/24 et 7j/7.', icon: 'bi-laptop', bg: 'bg-primary-soft' },
        { title: 'Tests certifiants', desc: 'Validez vos compétences avec des tests rigoureux conformes IATA.', icon: 'bi-clipboard-check', bg: 'bg-success-soft' },
        { title: 'Certificat immédiat', desc: 'Téléchargez votre certificat officiel dès la réussite de votre examen.', icon: 'bi-download', bg: 'bg-warning-soft' },
        { title: 'Cours à jour', desc: 'Contenus régulièrement actualisés selon les dernières réglementations.', icon: 'bi-arrow-repeat', bg: 'bg-info-soft' }
      ],
      commercialItems: [
        'Billetterie et Tarification',
        'Réservation Aérienne',
        'Agence de Voyages',
        'Administration hôtelière',
        'Administration du Tourisme',
        'Gestion de Relation Client'
      ]
    }
  },
  methods: {
    handleMouseMove(e) {
      if (!this.$refs.hero) return;
      const { clientWidth, clientHeight } = this.$refs.hero;
      this.mouseX = (e.clientX / clientWidth) * 2 - 1;
      this.mouseY = (e.clientY / clientHeight) * 2 - 1;
    }
  }
}
</script>

<style scoped>
.hero-aviation {
  min-height: 85vh;
  perspective: 1000px;
}

.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.1s ease-out;
  z-index: 1;
}

.bg-gradient-navy {
  background: linear-gradient(to bottom, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%);
}

.text-gradient-blue {
  background: linear-gradient(135deg, #4582FF 0%, #7A5AF8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg-navy-gradient {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}

.fw-black {
  font-weight: 900 !important;
  letter-spacing: -1.5px;
}

.z-index-2 { z-index: 2 !important; }
.z-index-3 { z-index: 3 !important; }

.backdrop-blur {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.strength-card {
  transition: all 0.3s ease;
}
.hover-border-primary:hover {
  border-color: #4582FF !important;
  transform: translateY(-5px);
}

.icon-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-primary-soft { background-color: rgba(69, 130, 255, 0.1); color: #4582FF; }
.bg-success-soft { background-color: rgba(57, 181, 74, 0.1); color: #39B54A; }
.bg-warning-soft { background-color: rgba(255, 193, 7, 0.1); color: #FFC107; }
.bg-info-soft { background-color: rgba(13, 202, 240, 0.1); color: #0DCAF0; }

.heading-line {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #4582FF, #39B54A);
  border-radius: 4px;
}

.expertise-box {
  transition: all 0.4s ease;
}
.expertise-box:hover {
  transform: translateY(-10px);
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.shadow-glow {
  box-shadow: 0 10px 30px rgba(69, 130, 255, 0.4);
}

.scale-hover:hover {
  transform: scale(1.05);
}

.rotate-2 { transform: rotate(2deg); }
.-rotate-3 { transform: rotate(-3deg); }

.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

@media (max-width: 991px) {
  .display-1 { font-size: 3.5rem; }
  .display-3 { font-size: 2.5rem; }
  .rounded-top-5 { border-top-left-radius: 2rem !important; border-top-right-radius: 2rem !important; }
}
</style>
