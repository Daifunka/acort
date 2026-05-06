<template>
  <div class="contact-view">
    <!-- Hero Section Ultra-Premium -->
    <section class="hero-section position-relative overflow-hidden pt-5 pb-5 bg-dark" @mousemove="handleMouseMove">
      <!-- Gradient Background -->
      <div class="position-absolute top-0 start-0 w-100 h-100 bg-logo-gradient"></div>

      <div class="position-absolute top-0 start-0 w-100 h-100 overflow-hidden pointer-events-none">
        <div class="blob blob-1" :style="blobStyle1"></div>
        <div class="blob blob-2" :style="blobStyle2"></div>
        <!-- Floating Icons Parallax -->
        <div class="floating-icon icon-1" :style="iconStyle1"><i class="bi bi-chat-dots-fill"></i></div>
        <div class="floating-icon icon-2" :style="iconStyle2"><i class="bi bi-envelope-heart-fill"></i></div>
        <div class="floating-icon icon-3" :style="iconStyle3"><i class="bi bi-telephone-outbound-fill"></i></div>
      </div>
      
      <div class="container position-relative z-index-2 py-5" data-aos="fade-up">
        <div class="row align-items-center mt-5">
          <div class="col-lg-10 mx-auto text-center">
            <h1 class="display-3 fw-black text-white mb-4">Parlons de Votre Projet</h1>
            <div class="heading-line mx-auto mb-4"></div>
            <p class="lead text-white opacity-75 mx-auto mb-0 fs-4" style="max-width: 800px;">
              Une question ? Un projet ? Nos experts vous répondent sous 24h pour construire ensemble votre réussite.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Content with Modern Layout -->
    <section class="py-5 bg-light position-relative">
      <div class="container py-5">
        <div class="row g-5">
          <!-- Contact Cards Side -->
          <div class="col-lg-4" data-aos="fade-right">
            <div class="d-flex flex-column gap-4">
              <div class="contact-card-premium p-4 rounded-5 bg-white shadow-sm border border-white">
                <div class="icon-glow-box mb-3">
                  <i class="bi bi-geo-alt-fill fs-3"></i>
                </div>
                <h5 class="fw-black mb-1">Notre Siège</h5>
                <p class="text-muted mb-0">Agla, Cotonou, Bénin</p>
                <div class="mt-3">
                  <a href="#" class="text-primary fw-bold text-decoration-none small">Voir sur Google Maps <i class="bi bi-arrow-right ms-1"></i></a>
                </div>
              </div>

              <div class="contact-card-premium p-4 rounded-5 bg-white shadow-sm border border-white">
                <div class="icon-glow-box blue mb-3">
                  <i class="bi bi-telephone-fill fs-3"></i>
                </div>
                <h5 class="fw-black mb-1">Direct Line</h5>
                <p class="text-muted mb-0">+229 01 64 48 40 40</p>
                <div class="mt-3">
                  <a href="https://wa.me/2290164484040" class="text-success fw-bold text-decoration-none small"><i class="bi bi-whatsapp me-1"></i> WhatsApp disponible</a>
                </div>
              </div>

              <div class="contact-card-premium p-4 rounded-5 bg-white shadow-sm border border-white">
                <div class="icon-glow-box green mb-3">
                  <i class="bi bi-envelope-fill fs-3"></i>
                </div>
                <h5 class="fw-black mb-1">Email Support</h5>
                <p class="text-muted mb-0">contact@acort-consulting.com</p>
                <div class="mt-3">
                  <a href="mailto:contact@acort-consulting.com" class="text-primary fw-bold text-decoration-none small">Nous écrire <i class="bi bi-send-fill ms-1"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact Form with Glassmorphism -->
          <div class="col-lg-8" data-aos="fade-left">
            <div class="glass-form-card p-1 rounded-5">
              <div class="card-body p-5 bg-white rounded-5 shadow-lg">
                <div class="row mb-4">
                  <div class="col-12">
                    <h3 class="fw-black mb-2">Envoyez un message</h3>
                    <p class="text-muted">Remplissez le formulaire ci-dessous, notre équipe reviendra vers vous très rapidement.</p>
                  </div>
                </div>
                
                <form @submit.prevent="submitForm">
                  <div class="row g-4">
                    <div class="col-md-6">
                      <div class="form-floating custom-form-group">
                        <input type="text" class="form-control" id="name" placeholder="Votre nom" required>
                        <label for="name">Nom Complet</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating custom-form-group">
                        <input type="email" class="form-control" id="email" placeholder="nom@exemple.com" required>
                        <label for="email">Email Professionnel</label>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-floating custom-form-group">
                        <select class="form-select" id="subject">
                          <option value="" selected disabled>Choisissez un sujet...</option>
                          <option value="audit">Audit Qualité & Conseil</option>
                          <option value="formation">Formation Aéronautique</option>
                          <option value="btp">BTP & Habitat</option>
                          <option value="it">Services Informatiques</option>
                        </select>
                        <label for="subject">Domaine d'intérêt</label>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-floating custom-form-group">
                        <textarea class="form-control" placeholder="Votre message" id="message" style="height: 150px" required></textarea>
                        <label for="message">Message</label>
                      </div>
                    </div>
                    <div class="col-md-12 mt-5">
                      <button type="submit" class="btn btn-primary btn-lg w-100 rounded-pill fw-black py-3 shadow-glow transition-all">
                        <i class="bi bi-send-check-fill me-2"></i> Envoyer ma demande
                      </button>
                    </div>
                  </div>
                </form>
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
  name: 'ContactView',
  data() {
    return {
      mouseX: 0,
      mouseY: 0
    }
  },
  computed: {
    blobStyle1() {
      return { transform: `translate(${this.mouseX * 30}px, ${this.mouseY * 30}px)` }
    },
    blobStyle2() {
      return { transform: `translate(${this.mouseX * -30}px, ${this.mouseY * -30}px)` }
    },
    iconStyle1() { return { transform: `translate(${this.mouseX * 60}px, ${this.mouseY * 60}px)` } },
    iconStyle2() { return { transform: `translate(${this.mouseX * -40}px, ${this.mouseY * -40}px)` } },
    iconStyle3() { return { transform: `translate(${this.mouseX * 80}px, ${this.mouseY * -80}px)` } }
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = (e.clientX / window.innerWidth) - 0.5;
      this.mouseY = (e.clientY / window.innerHeight) - 0.5;
    },
    submitForm() {
      alert('Merci ! Votre message a été transmis à nos experts. Nous vous recontacterons sous 24h.');
    }
  }
}
</script>

<style scoped>
.hero-section {
  min-height: 60vh;
  display: flex;
  align-items: center;
}

.fw-black { font-weight: 900 !important; }

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
  width: 500px;
  height: 500px;
  background: rgba(69, 130, 255, 0.2);
  filter: blur(100px);
  border-radius: 50%;
  z-index: 0;
}
.blob-1 { top: -10%; left: -10%; }
.blob-2 { bottom: -20%; right: -10%; background: rgba(57, 181, 74, 0.15); }

.floating-icon {
  position: absolute;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.1);
  z-index: 1;
}
.icon-1 { top: 20%; left: 10%; }
.icon-2 { bottom: 20%; left: 15%; }
.icon-3 { top: 25%; right: 10%; }

.bg-logo-gradient {
  background: linear-gradient(135deg, #1a2a6c 0%, #4582FF 50%, #39B54A 100%);
}

.bg-gradient-dark-heavy {
  background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 100%);
}

/* Contact Cards */
.contact-card-premium {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.contact-card-premium:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.05) !important;
  border-color: #4582FF !important;
}

.icon-glow-box {
  width: 65px; height: 65px;
  background: rgba(69, 130, 255, 0.1);
  color: #4582FF;
  border-radius: 20px;
  display: flex; align-items: center; justify-content: center;
}
.icon-glow-box.blue { background: rgba(0, 123, 255, 0.1); color: #007bff; }
.icon-glow-box.green { background: rgba(40, 167,  green, 0.1); color: #39B54A; }

/* Form Styling */
.glass-form-card {
  background: linear-gradient(135deg, rgba(69, 130, 255, 0.2), rgba(57, 181, 74, 0.2));
  backdrop-filter: blur(10px);
}

.custom-form-group .form-control, 
.custom-form-group .form-select {
  border: 1px solid rgba(0,0,0,0.05);
  background: #f8f9fa;
  border-radius: 15px;
  padding: 1.5rem 1rem 0.5rem;
}
.custom-form-group .form-control:focus, 
.custom-form-group .form-select:focus {
  background: white;
  border-color: #4582FF;
  box-shadow: 0 0 0 4px rgba(69, 130, 255, 0.1);
}

.shadow-glow {
  box-shadow: 0 10px 30px rgba(69, 130, 255, 0.3);
}
.shadow-glow:hover {
  box-shadow: 0 15px 40px rgba(69, 130, 255, 0.4);
  transform: translateY(-2px);
}

.transition-all { transition: all 0.3s ease; }
</style>
