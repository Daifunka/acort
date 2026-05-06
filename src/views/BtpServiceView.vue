<template>
  <div class="btp-service-view bg-dark overflow-hidden">
    <!-- Immersive Hero Parallax -->
    <section class="hero-parallax position-relative d-flex align-items-center justify-content-center" @mousemove="handleMouseMove" ref="hero">
      <div class="parallax-bg" :style="{ transform: `translate(${mouseX * -20}px, ${mouseY * -20}px) scale(1.1)` }">
        <!-- Image BTP officielle -->
        <img src="@/assets/btp-cover.jpg" alt="Construction BTP" class="w-100 h-100 object-fit-cover opacity-60">
        <div class="position-absolute top-0 start-0 w-100 h-100 bg-gradient-dark-heavy"></div>
      </div>
      
      <div class="container position-relative z-index-2 text-center mt-5 pt-5">
        <div class="d-inline-flex align-items-center px-4 py-2 rounded-pill bg-white bg-opacity-10 backdrop-blur border border-white border-opacity-25 mb-4" data-aos="fade-down">
          <span class="text-white fw-bold text-uppercase tracking-widest small">ACoRT Consulting - Génie Civil</span>
        </div>
        <div class="mb-5" data-aos="zoom-in">
          <h1 class="display-4 fw-black text-white mb-0 lh-1">MON DOMICILE</h1>
          <div class="display-2 text-green-brand fw-black mt-n1 lh-1">CLEF EN MAIN</div>
        </div>
        <p class="lead text-white opacity-75 fs-4 mx-auto" style="max-width: 800px;" data-aos="fade-up" data-aos-delay="200">
          Faciliter la construction de maisons pour la diaspora. Nous surmontons les obstacles et la méfiance pour réaliser votre rêve de propriété au pays, en toute transparence.
        </p>
      </div>
      
      <div class="scroll-indicator position-absolute bottom-0 start-50 translate-middle-x mb-4 text-white opacity-50">
        <span class="small tracking-widest text-uppercase d-block mb-2">Découvrir le projet</span>
        <i class="bi bi-chevron-down fs-4 bounce"></i>
      </div>
    </section>

    <!-- Context & Objectives -->
    <section class="py-5 bg-white position-relative z-index-3" style="margin-top: -50px; border-radius: 50px 50px 0 0;">
      <div class="container py-5">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6" data-aos="fade-right">
            <h6 class="text-green-brand fw-bold tracking-widest mb-2 text-uppercase">Pourquoi ce projet ?</h6>
            <h2 class="display-4 fw-black text-dark mb-4 lh-1">Bâtir un pont entre vos rêves et la réalité.</h2>
            <p class="text-secondary fs-5 lh-lg mb-4">
              De nombreux membres de la diaspora souhaitent construire des maisons dans leur pays d’origine, mais la méfiance envers les processus de construction, souvent accompagnée de fraudes, les freine.
            </p>
            <div class="p-4 border-start border-4 border-green-brand bg-light rounded-end mb-4">
              <p class="fst-italic text-dark fw-medium mb-0">
                "Notre mission est de surmonter ces obstacles en offrant des services transparents et fiables, permettant ainsi à chaque membre de la diaspora de réaliser son rêve de propriété en toute sérénité."
              </p>
            </div>
            <ul class="list-unstyled mb-0">
              <li class="d-flex align-items-center mb-3">
                <i class="bi bi-check-circle-fill text-green-brand fs-4 me-3"></i>
                <span class="fw-bold text-dark">Accompagnement de A à Z</span>
              </li>
              <li class="d-flex align-items-center mb-3">
                <i class="bi bi-check-circle-fill text-green-brand fs-4 me-3"></i>
                <span class="fw-bold text-dark">Financement échelonné adapté</span>
              </li>
              <li class="d-flex align-items-center">
                <i class="bi bi-check-circle-fill text-green-brand fs-4 me-3"></i>
                <span class="fw-bold text-dark">Garantie qualité et délais</span>
              </li>
            </ul>
          </div>
          <div class="col-lg-6" data-aos="fade-left">
            <!-- 3D Tilt Card Simulation -->
            <div class="tilt-container" @mousemove="handleTilt" @mouseleave="resetTilt" ref="tiltCard">
              <div class="tilt-card rounded-5 overflow-hidden shadow-2xl position-relative">
                <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80" alt="Plan 3D" class="w-100 h-100 object-fit-cover">
                <div class="position-absolute bottom-0 start-0 w-100 p-4 bg-dark bg-opacity-75 backdrop-blur text-white">
                  <h4 class="fw-bold mb-1">Conception Sur-Mesure</h4>
                  <p class="small opacity-75 mb-0">Visualisation 3D et intégration de vos envies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid (Immersive Dark) -->
    <section class="py-5 bg-dark position-relative">
      <div class="container py-5">
        <div class="text-center mb-5" data-aos="fade-up">
          <h6 class="text-green-brand fw-bold tracking-widest mb-2 text-uppercase">Notre Expertise</h6>
          <h2 class="display-4 fw-black text-white">Services Complets</h2>
          <p class="text-white opacity-50 mx-auto" style="max-width: 600px;">Nous prenons en charge chaque étape de votre investissement immobilier.</p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="100">
            <div class="service-glass-card p-4 rounded-4 h-100 text-center">
              <div class="icon-glow mx-auto mb-4 bg-primary bg-opacity-10 text-primary">
                <i class="bi bi-map fs-1"></i>
              </div>
              <h5 class="text-white fw-bold mb-3">1. Acquisition</h5>
              <p class="text-white opacity-50 small mb-0">Recherche et achat de terrains adaptés et sécurisés légalement.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="200">
            <div class="service-glass-card p-4 rounded-4 h-100 text-center">
              <div class="icon-glow mx-auto mb-4 bg-primary bg-opacity-10 text-primary">
                <i class="bi bi-bricks fs-1"></i>
              </div>
              <h5 class="text-white fw-bold mb-3">2. Construction</h5>
              <p class="text-white opacity-50 small mb-0">Services de génie civil pour concevoir et construire sur mesure.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
            <div class="service-glass-card p-4 rounded-4 h-100 text-center">
              <div class="icon-glow mx-auto mb-4 bg-success bg-opacity-10 text-success">
                <i class="bi bi-lamp fs-1"></i>
              </div>
              <h5 class="text-white fw-bold mb-3">3. Équipement</h5>
              <p class="text-white opacity-50 small mb-0">Ameublement complet avec nos partenaires locaux de qualité.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="400">
            <div class="service-glass-card p-4 rounded-4 h-100 text-center">
              <div class="icon-glow mx-auto mb-4 bg-info bg-opacity-10 text-info">
                <i class="bi bi-house-check fs-1"></i>
              </div>
              <h5 class="text-white fw-bold mb-3">4. Gestion Locative</h5>
              <p class="text-white opacity-50 small mb-0">Recherche de locataires, gestion des contrats et collecte des loyers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio / Works Section -->
    <section class="py-5 bg-white position-relative">
      <div class="container py-5">
        <div class="text-center mb-5" data-aos="fade-up">
          <h6 class="text-green-brand fw-bold tracking-widest mb-2 text-uppercase">Notre Portfolio</h6>
          <h2 class="display-4 fw-black text-dark mb-3">Nos Réalisations</h2>
          <p class="text-secondary mx-auto" style="max-width: 700px;">
            Découvrez un aperçu de nos conceptions architecturales. Des plans de côté rigoureux aux modélisations 3D immersives, nous donnons vie à vos idées avant même le premier coup de pioche.
          </p>
        </div>

        <div class="row g-4 mb-5">
          <div class="col-12" data-aos="fade-up">
            <h4 class="fw-bold border-bottom pb-2 mb-4">Perspectives 3D</h4>
          </div>
          <div class="col-md-4" data-aos="zoom-in" data-aos-delay="100">
            <div class="gallery-item rounded-4 overflow-hidden shadow-sm">
              <img src="@/assets/perspective1.png" alt="Perspective 1" class="img-fluid w-100 object-fit-cover hover-zoom" style="height: 250px;">
            </div>
          </div>
          <div class="col-md-4" data-aos="zoom-in" data-aos-delay="200">
            <div class="gallery-item rounded-4 overflow-hidden shadow-sm">
              <img src="@/assets/perspective2.png" alt="Perspective 2" class="img-fluid w-100 object-fit-cover hover-zoom" style="height: 250px;">
            </div>
          </div>
          <div class="col-md-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="gallery-item rounded-4 overflow-hidden shadow-sm">
              <img src="@/assets/perspective3.png" alt="Perspective 3" class="img-fluid w-100 object-fit-cover hover-zoom" style="height: 250px;">
            </div>
          </div>
          <div class="col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="gallery-item rounded-4 overflow-hidden shadow-sm">
              <img src="@/assets/perspective4.png" alt="Perspective 4" class="img-fluid w-100 object-fit-cover hover-zoom" style="height: 350px;">
            </div>
          </div>
          <div class="col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="gallery-item rounded-4 overflow-hidden shadow-sm">
              <img src="@/assets/perspective5.png" alt="Perspective 5" class="img-fluid w-100 object-fit-cover hover-zoom" style="height: 350px;">
            </div>
          </div>
        </div>

        <div class="row g-4 mt-2">
          <div class="col-12" data-aos="fade-up">
            <h4 class="fw-bold border-bottom pb-2 mb-4">Plans Architecturaux</h4>
          </div>
          <div class="col-md-3" data-aos="zoom-in" data-aos-delay="100">
            <div class="gallery-item rounded-4 overflow-hidden shadow-sm border">
              <img src="@/assets/PlanCote1.png" alt="Plan 1" class="img-fluid w-100 object-fit-contain p-3 bg-light hover-zoom" style="height: 200px;">
            </div>
          </div>
          <div class="col-md-3" data-aos="zoom-in" data-aos-delay="200">
            <div class="gallery-item rounded-4 overflow-hidden shadow-sm border">
              <img src="@/assets/PlanCote2.png" alt="Plan 2" class="img-fluid w-100 object-fit-contain p-3 bg-light hover-zoom" style="height: 200px;">
            </div>
          </div>
          <div class="col-md-3" data-aos="zoom-in" data-aos-delay="300">
            <div class="gallery-item rounded-4 overflow-hidden shadow-sm border">
              <img src="@/assets/PlanCote3.png" alt="Plan 3" class="img-fluid w-100 object-fit-contain p-3 bg-light hover-zoom" style="height: 200px;">
            </div>
          </div>
          <div class="col-md-3" data-aos="zoom-in" data-aos-delay="400">
            <div class="gallery-item rounded-4 overflow-hidden shadow-sm border">
              <img src="@/assets/PlanCote4.png" alt="Plan 4" class="img-fluid w-100 object-fit-contain p-3 bg-light hover-zoom" style="height: 200px;">
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- Strategy & Finance Timeline -->
    <section class="py-5 bg-light">
      <div class="container py-5">
        <div class="row align-items-center g-5">
          <div class="col-lg-5" data-aos="fade-right">
            <h2 class="fw-black text-dark mb-4">Stratégie & Plan Financier</h2>
            <p class="text-secondary mb-4">
              Nous avons élaboré un modèle de paiement échelonné. Les paiements sont répartis sur plusieurs étapes de construction, vous permettant de gérer votre budget efficacement et en toute confiance.
            </p>
            <div class="d-flex align-items-center mb-3">
              <i class="bi bi-shield-lock-fill text-primary fs-3 me-3"></i>
              <div>
                <h6 class="fw-bold mb-0">Gestion des Risques</h6>
                <p class="small text-muted mb-0">Contrats clairs, pénalités de retard et fonds de réserve.</p>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <i class="bi bi-chat-square-quote-fill text-primary fs-3 me-3"></i>
              <div>
                <h6 class="fw-bold mb-0">Communication Transparente</h6>
                <p class="small text-muted mb-0">Rapports réguliers et visites de site virtuelles.</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-7" data-aos="fade-left">
            <div class="timeline position-relative">
              <div class="timeline-line"></div>
              
              <div class="timeline-item d-flex mb-4">
                <div class="timeline-marker bg-primary text-white">1</div>
                <div class="timeline-content ms-4 p-4 bg-white rounded-4 shadow-sm w-100">
                  <h6 class="fw-bold text-dark text-uppercase small">Phase 1 : Prospection & Légalité</h6>
                  <p class="small text-muted mb-0">Identification des zones à fort potentiel et vérification des titres fonciers.</p>
                </div>
              </div>
              
              <div class="timeline-item d-flex mb-4">
                <div class="timeline-marker bg-warning text-white">2</div>
                <div class="timeline-content ms-4 p-4 bg-white rounded-4 shadow-sm w-100">
                  <h6 class="fw-bold text-dark">Phase 2 : Architecture & Devis</h6>
                  <p class="small text-muted mb-0">Validation des plans 3D et établissement du premier acompte du plan échelonné.</p>
                </div>
              </div>
              
              <div class="timeline-item d-flex mb-4">
                <div class="timeline-marker bg-success">3</div>
                <div class="timeline-content ms-4 p-4 bg-white rounded-4 shadow-sm w-100">
                  <h6 class="fw-bold text-dark">Phase 3 : Construction & Suivi</h6>
                  <p class="small text-muted mb-0">Lancement des travaux avec compte-rendu hebdomadaire d'avancement.</p>
                </div>
              </div>
              
              <div class="timeline-item d-flex">
                <div class="timeline-marker bg-info">4</div>
                <div class="timeline-content ms-4 p-4 bg-white rounded-4 shadow-sm w-100">
                  <h6 class="fw-bold text-dark">Phase 4 : Livraison Clef en Main</h6>
                  <p class="small text-muted mb-0">Contrôle qualité, aménagement et remise des clés (ou mise en location).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Devis Form Section -->
    <section class="py-5 bg-white position-relative border-top border-bottom" ref="devisForm" id="devis-form">
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card border-0 shadow-lg-3d rounded-5 overflow-hidden">
              <div class="row g-0">
                <div class="col-md-5 bg-dark d-flex flex-column justify-content-center p-5 text-white position-relative">
                  <div class="position-absolute top-0 start-0 w-100 h-100">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Villa" class="w-100 h-100 object-fit-cover opacity-40">
                    <div class="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-40"></div>
                  </div>
                  <div class="position-relative z-index-2">
                    <i class="bi bi-file-earmark-text display-4 text-green-brand mb-4 d-block"></i>
                    <h3 class="fw-black mb-3">Obtenir un Devis</h3>
                    <p class="small opacity-75 mb-4">
                      Remplissez ce formulaire pour recevoir une estimation personnalisée ou être recontacté par nos experts en génie civil.
                    </p>
                    <ul class="list-unstyled small mb-0">
                      <li class="mb-2"><i class="bi bi-check2 text-green-brand me-2"></i> Étude gratuite</li>
                      <li class="mb-2"><i class="bi bi-check2 text-green-brand me-2"></i> Réponse sous 48h</li>
                      <li><i class="bi bi-check2 text-green-brand me-2"></i> Confidentialité assurée</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-7 bg-light p-5">
                  <form @submit.prevent="submitDevis">
                    <div class="row g-3">
                      <div class="col-sm-6">
                        <label class="form-label small fw-bold text-muted">Nom complet *</label>
                        <input type="text" class="form-control form-control-sm border-0 shadow-sm" required>
                      </div>
                      <div class="col-sm-6">
                        <label class="form-label small fw-bold text-muted">Téléphone *</label>
                        <input type="tel" class="form-control form-control-sm border-0 shadow-sm" required>
                      </div>
                      <div class="col-12">
                        <label class="form-label small fw-bold text-muted">Email *</label>
                        <input type="email" class="form-control form-control-sm border-0 shadow-sm" required>
                      </div>
                      <div class="col-sm-6">
                        <label class="form-label small fw-bold text-muted">Type de projet</label>
                        <select class="form-select form-select-sm border-0 shadow-sm">
                          <option>Maison individuelle</option>
                          <option>Immeuble de rapport</option>
                          <option>Rénovation</option>
                          <option>Achat de parcelle</option>
                        </select>
                      </div>
                      <div class="col-sm-6">
                        <label class="form-label small fw-bold text-muted">Localisation souhaitée</label>
                        <input type="text" class="form-control form-control-sm border-0 shadow-sm" placeholder="Ville ou région">
                      </div>
                      <div class="col-12">
                        <label class="form-label small fw-bold text-muted">Détails du projet</label>
                        <textarea class="form-control border-0 shadow-sm" rows="3" placeholder="Parlez-nous brièvement de vos envies et de votre budget..."></textarea>
                      </div>
                      <div class="col-12 mt-4">
                        <button type="submit" class="btn btn-primary w-100 fw-bold shadow-sm py-3 rounded-pill">
                          ENVOYER MA DEMANDE
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Direct Contact CTA (Premium Vibe) -->
    <section class="py-5 bg-dark position-relative overflow-hidden">
      <div class="position-absolute top-0 start-0 w-100 h-100">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80" alt="BTP Construction" class="w-100 h-100 object-fit-cover">
        <div class="position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(0, 0, 0, 0.7);"></div>
      </div>
      <div class="container py-5 position-relative z-index-2">
        <div class="row justify-content-center">
          <div class="col-lg-10 text-center" data-aos="zoom-in">
            <h2 class="display-5 fw-black text-white mb-3">Construisez la Maison de Vos Rêves !</h2>
            <p class="lead text-white opacity-75 mb-5">Ne laissez pas la méfiance vous freiner. Contactez directement la direction du projet pour une étude personnalisée.</p>
            
            <div class="row justify-content-center g-4 text-start">
              <div class="col-md-5">
                <div class="glass-contact-card p-4 rounded-4 border border-white border-opacity-25 h-100 transition-all hover-glow">
                  <h5 class="text-white fw-bold mb-1">Benoît NOUKPO</h5>
                  <p class="text-green-brand small fw-bold mb-3">DIRECTEUR GÉNÉRAL</p>
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-envelope-fill text-white opacity-50 me-2"></i>
                    <a href="mailto:benoit.noukpo@acort-consulting.com" class="text-white text-decoration-none small">benoit.noukpo@acort-consulting.com</a>
                  </div>
                  <div class="d-flex align-items-start">
                    <i class="bi bi-telephone-fill text-white opacity-50 me-2 mt-1"></i>
                    <div class="small text-white">
                      <a href="tel:+2290197087009" class="text-white text-decoration-none d-block">(+229) 01 97 08 70 09</a>
                      <a href="tel:+2290164484040" class="text-white text-decoration-none d-block">(+229) 01 64 48 40 40</a>
                      <a href="tel:+2693209993" class="text-white text-decoration-none d-block">(+269) 32 09 99 3</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-md-5">
                <div class="glass-contact-card p-4 rounded-4 border border-white border-opacity-25 h-100 transition-all hover-glow">
                  <h5 class="text-white fw-bold mb-1">Gloria NOUKPO</h5>
                  <p class="text-green-brand small fw-bold mb-3">CHEF DE PROJET</p>
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-envelope-fill text-white opacity-50 me-2"></i>
                    <a href="mailto:gloria.noukpo@acort-consulting.com" class="text-white text-decoration-none small">gloria.noukpo@acort-consulting.com</a>
                  </div>
                  <div class="d-flex align-items-start">
                    <i class="bi bi-telephone-fill text-white opacity-50 me-2 mt-1"></i>
                    <div class="small text-white">
                      <a href="tel:+2290161086464" class="text-white text-decoration-none d-block">(+229) 01 61 08 64 64</a>
                      <a href="tel:+2290195477373" class="text-white text-decoration-none d-block">(+229) 01 95 47 73 73</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="mt-5">
              <router-link to="/contact" class="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg">
                NOUS CONTACTER
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
// Désactivation temporaire de Three.js pour stabiliser le composant
// import * as THREE from 'https://unpkg.com/three@0.157.0/build/three.module.js';

export default {
  name: 'BtpServiceView',
  data() {
    return {
      mouseX: 0,
      mouseY: 0
    }
  },
  mounted() {
    window.addEventListener('resize', this.onWindowResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  },
  methods: {
    onWindowResize() {
      // Pourrait être utilisé pour d'autres éléments réactifs
    },
    handleMouseMove(e) {
      if (!this.$refs.hero) return;
      const { clientWidth, clientHeight } = this.$refs.hero;
      this.mouseX = (e.clientX / clientWidth) * 2 - 1;
      this.mouseY = (e.clientY / clientHeight) * 2 - 1;
    },
    handleTilt(e) {
      if (!this.$refs.tiltCard) return;
      const card = this.$refs.tiltCard.querySelector('.tilt-card');
      const rect = this.$refs.tiltCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const tiltX = (y - centerY) / 10;
      const tiltY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    },
    resetTilt() {
      if (!this.$refs.tiltCard) return;
      const card = this.$refs.tiltCard.querySelector('.tilt-card');
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    },
    submitDevis() {
      alert("Merci ! Votre demande de devis a bien été envoyée. Nos experts vous contacteront sous 48h.");
    }
  }
}
</script>

<style scoped>
.hero-parallax {
  min-height: 90vh;
  perspective: 1000px;
}

.z-index-2 { z-index: 2 !important; }
.z-index-3 { z-index: 3 !important; }

.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.1s ease-out;
  z-index: 1;
}

.bg-gradient-dark-heavy {
  background: linear-gradient(to bottom, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%);
}

.backdrop-blur {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.text-green-brand {
  color: #39B54A !important;
}

.border-green-brand {
  border-color: #39B54A !important;
}

.title-3d {
  text-shadow: 0 8px 30px rgba(0,0,0,1);
  letter-spacing: -2px;
  position: relative;
  z-index: 10;
}

.fw-black {
  font-weight: 900 !important;
  letter-spacing: -2px;
}

.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-15px); }
  60% { transform: translateY(-7px); }
}

/* Tilt Card */
.tilt-container {
  perspective: 1000px;
  transform-style: preserve-3d;
}
.tilt-card {
  height: 400px;
  transition: transform 0.1s ease-out;
  transform-style: preserve-3d;
  will-change: transform;
}

/* Service Glass Cards */
.service-glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}
.service-glass-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.2);
}
.icon-glow {
  width: 70px;
  height: 70px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Timeline */
.timeline {
  padding-left: 20px;
}
.timeline-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 35px;
  width: 2px;
  background: rgba(0,0,0,0.05);
  z-index: 0;
}
.timeline-item {
  position: relative;
  z-index: 1;
}
.timeline-marker {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  flex-shrink: 0;
  box-shadow: 0 0 0 4px white;
}

/* Contact Cards */
.glass-contact-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}
.shadow-lg-3d {
  box-shadow: 0 40px 80px -15px rgba(0, 0, 0, 0.5);
}

.hover-glow:hover {
  border-color: var(--bs-warning) !important;
  box-shadow: 0 10px 30px rgba(255, 193, 7, 0.1);
  transform: translateY(-3px);
}

/* Gallery hover effect */
.gallery-item img {
  transition: transform 0.5s ease;
}
.hover-zoom:hover {
  transform: scale(1.05);
}
</style>
