<template>
  <div class="service-detail-view bg-white min-vh-100" v-if="service">
    <!-- Hero Section: Premium Magazine Style -->
    <section class="position-relative hero-magazine d-flex align-items-center">
      <div class="position-absolute top-0 start-0 w-100 h-100 z-index-0">
        <img :src="service.image" :alt="service.title" class="w-100 h-100 object-fit-cover shadow-inner">
        <div class="position-absolute top-0 start-0 w-100 h-100 overlay-gradient"></div>
      </div>
      
      <div class="container position-relative z-index-2 pt-100">
        <nav aria-label="breadcrumb" class="mb-4" data-aos="fade-down">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><router-link to="/" class="text-white opacity-75 text-decoration-none small fw-bold">ACCUEIL</router-link></li>
            <li class="breadcrumb-item text-white opacity-75 small fw-bold">SERVICES</li>
            <li class="breadcrumb-item active text-white small fw-bold" aria-current="page">{{ service.title.toUpperCase() }}</li>
          </ol>
        </nav>
        
        <div class="row">
          <div class="col-lg-10" data-aos="fade-up">
            <h1 class="display-4 fw-black text-white mb-0 tracking-tighter">
              {{ service.title }}
            </h1>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content Section -->
    <section class="py-5 position-relative">
      <div class="container py-5">
        <div class="row g-5">
          <!-- Left Column: Content -->
          <div class="col-lg-8" data-aos="fade-right">
            <div class="pe-lg-5">
              <div class="d-flex align-items-center mb-5">
                <div class="line-accent me-4" :style="{ background: service.color }"></div>
                <h4 class="text-primary fw-bold mb-0 tracking-widest text-uppercase small">Notre Expertise</h4>
              </div>
              
              <div class="text-muted mb-5 content-text" style="white-space: pre-wrap;">{{ service.fullDesc }}</div>

              <div class="row g-4 mt-4">
                <div class="col-12">
                  <h3 class="fw-bold mb-5 text-dark">Points Clés & Avantages</h3>
                </div>
                <div class="col-md-6" v-for="(feature, idx) in service.features" :key="idx">
                  <div class="feature-card-premium p-4 rounded-4 transition-all h-100">
                    <div class="icon-box mb-4 shadow-sm" :style="{ color: service.color, backgroundColor: `${service.color}10` }">
                      <i :class="['bi', service.icon, 'fs-3']"></i>
                    </div>
                    <h5 class="text-dark fw-black mb-3">{{ feature.title }}</h5>
                    <p class="text-muted small mb-0 lh-base">{{ feature.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Sidebar -->
          <div class="col-lg-4" data-aos="fade-left">
            <div class="sticky-top" style="top: 120px;">
              <div class="card border-0 bg-navy-premium rounded-5 overflow-hidden shadow-2xl border border-white border-opacity-10">
                <div class="card-body p-5">
                  <div class="mb-4">
                    <span class="badge rounded-pill px-3 py-2 bg-primary text-white fw-bold small">CONTACT RAPIDE</span>
                  </div>
                  <h3 class="text-white fw-black mb-4">Besoin d'un accompagnement sur mesure ?</h3>
                  <p class="text-white opacity-90 mb-5">
                    Nos experts sont à votre écoute pour concevoir la solution idéale adaptée à vos objectifs.
                  </p>
                  <router-link to="/contact" class="btn btn-primary btn-lg w-100 rounded-pill p-3 fw-bold shadow-glow hover-up">
                    <i class="bi bi-person-badge-fill me-2"></i> PARLER À UN EXPERT
                  </router-link>
                </div>
                <div class="card-footer bg-white bg-opacity-10 border-0 p-4 text-center">
                  <a href="tel:+2290164484040" class="text-white text-decoration-none d-flex align-items-center justify-content-center fw-bold hover-opacity-100 transition-all">
                    <i class="bi bi-telephone-fill me-2 text-primary"></i> +229 01 64 48 40 40
                  </a>
                </div>
              </div>
              
              <!-- Trust Info -->
              <div class="mt-5 p-4 rounded-4 bg-light border border-white shadow-sm">
                <div class="d-flex align-items-center mb-3">
                  <i class="bi bi-shield-check text-success fs-3 me-3"></i>
                  <h6 class="fw-bold mb-0">Engagement Qualité</h6>
                </div>
                <p class="small text-muted mb-0">
                  Tous nos services sont certifiés et respectent les normes internationales les plus strictes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>

  <div v-else class="min-vh-100 d-flex align-items-center justify-content-center bg-white">
    <div class="spinner-border text-primary" role="status"></div>
  </div>
</template>

<script>
import { getServiceBySlug } from '@/data/services';

export default {
  name: 'ServiceDetailView',
  data() {
    return {
      service: null
    }
  },
  created() {
    this.loadService();
  },
  watch: {
    '$route.path'() {
      this.loadService();
    }
  },
  methods: {
    loadService() {
      const slug = this.$route.params.slug || this.$route.path.replace(/^\//, '');
      if (slug) {
        this.service = getServiceBySlug(slug);
      }
    }
  }
}
</script>

<style scoped>
.hero-magazine {
  min-height: 40vh;
  overflow: hidden;
}

.pt-100 {
  padding-top: 100px;
}

.overlay-gradient {
  background: linear-gradient(to bottom, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0.9) 100%);
}

.z-index-0 { z-index: 0; }
.z-index-2 { z-index: 2; }

.tracking-widest { letter-spacing: 0.2em; }
.tracking-tighter { letter-spacing: -0.05em; }

.line-accent {
  width: 50px;
  height: 3px;
  border-radius: 2px;
}

.content-text {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #475569 !important;
}

.feature-card-premium {
  border: 1px solid #f1f5f9;
  background-color: #ffffff;
}

.feature-card-premium:hover {
  border-color: transparent;
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  transform: translateY(-5px);
}

.icon-box {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hover-up:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(69, 130, 255, 0.3) !important;
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.4);
}

.bg-navy-premium {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}

.shadow-glow {
  box-shadow: 0 10px 30px rgba(69, 130, 255, 0.4);
}

.transition-all { transition: all 0.3s ease; }

@media (max-width: 991px) {
  .hero-magazine {
    min-height: 60vh;
  }
  .display-1 {
    font-size: 3.5rem;
  }
}
</style>
