<template>
  <div class="home-view">
    <!-- Premium Hero Section -->
    <section class="hero-section position-relative overflow-hidden pt-5" style="min-height: 100vh;">
      <!-- Animated Background Blobs -->
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
      
      <!-- Grid Pattern Overlay -->
      <div class="grid-overlay"></div>

      <div class="container position-relative z-index-2 h-100 pb-5" style="padding-top: 120px;">
        <div class="row align-items-center h-100">
          <div class="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
            <div class="d-inline-flex align-items-center rounded-pill bg-white px-3 py-2 mb-4 shadow-sm border border-light animate-badge">
              <span class="badge bg-brand-green rounded-pill me-2 px-3">Nouveau</span>
              <span class="small fw-bold text-secondary">Découvrez notre plateforme d'E-learning</span>
            </div>
            <h1 class="hero-title fw-black mb-4 lh-sm">
              Propulsez votre <br>
              <span class="text-gradient">Carrière</span> & <span class="text-gradient">Entreprise</span>
            </h1>
            <p class="lead mb-5 text-muted" style="max-width: 500px; font-size: 1.15rem; line-height: 1.7;">
              Acort Consulting vous accompagne vers l'excellence avec des solutions sur mesure en stratégie, audit, et formation professionnelle.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <router-link to="/qui-sommes-nous" class="btn btn-primary btn-lg shadow-lg">Découvrir l'Expertise</router-link>
              <a href="#contact" class="btn btn-outline-primary btn-lg bg-white">Nous Contacter</a>
            </div>
            
            <!-- Quick Trust Indicators -->
            <div class="d-flex align-items-center mt-5 pt-4">
              <div class="d-flex me-3 avatars-group">
                <div class="avatar-sm rounded-circle bg-primary text-white d-flex align-items-center justify-content-center border border-3 border-white">JS</div>
                <div class="avatar-sm rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center border border-3 border-white" style="background-color: #7A5AF8 !important;">MK</div>
                <div class="avatar-sm rounded-circle bg-dark text-white d-flex align-items-center justify-content-center border border-3 border-white">+</div>
              </div>
              <div>
                <div class="fw-bold fs-6">1500+ Apprenants</div>
                <div class="small text-muted d-flex align-items-center">
                  <span class="text-warning me-1">★★★★★</span> Avis vérifiés
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6 position-relative mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">
            <!-- Glassmorphism Composition -->
            <div class="composition-wrapper mx-auto position-relative">
              <!-- Geometric decorative shape -->
              <div class="position-absolute" style="top: -20px; right: -20px; z-index: 1;">
                 <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="49" stroke="url(#paint0_linear)" stroke-width="2" stroke-dasharray="10 10"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4582FF"/>
                    <stop offset="1" stop-color="#7A5AF8"/>
                    </linearGradient>
                    </defs>
                 </svg>
              </div>

              <!-- Main Image/Card Slider -->
              <div class="glass-panel main-glass-card p-2 shadow-lg position-relative d-flex flex-column z-index-2 overflow-hidden" style="border-radius: 2rem;">
                 <div id="heroCarousel" class="carousel slide h-100" data-bs-ride="carousel">
                    <div class="carousel-inner h-100">
                       <div v-for="(slide, index) in heroSlides" :key="index" :class="['carousel-item h-100 custom-transition', { active: index === 0 }]">
                          <img :src="slide.url" :alt="slide.alt" class="d-block w-100 h-100 rounded-4 hero-img-fixed" style="object-fit: cover;">
                       </div>
                    </div>
                 </div>
              </div>
              
              <!-- Floating Element 1 -->
              <div class="glass-panel floating-card-1 p-3 rounded-4 shadow-lg position-absolute d-flex align-items-center z-index-3">
                <div class="icon-box bg-brand-green bg-opacity-10 text-brand-green rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 45px; height: 45px; font-size: 1.2rem;">📈</div>
                <div>
                  <div class="small text-muted fw-bold">Taux de Réussite</div>
                  <div class="fw-black fs-5 text-dark">98.5%</div>
                </div>
              </div>

              <!-- Floating Element 2 -->
              <div class="glass-panel floating-card-2 p-3 rounded-4 shadow-lg position-absolute z-index-3">
                <div class="d-flex align-items-center mb-2">
                   <div class="spinner-grow spinner-grow-sm text-primary me-2" role="status"></div>
                   <span class="small fw-bold text-dark">Live Session</span>
                </div>
                <div class="small text-muted">Formation Leadership</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos Valeurs (Modernized) -->
    <section class="py-5 position-relative z-index-2" style="margin-top: -60px;">
      <div class="container">
        <div class="row g-4 glass-panel rounded-5 p-4 mx-2 border shadow-sm">
          <div class="col-md-3 text-center value-card" data-aos="fade-up" data-aos-delay="100">
            <div class="icon-wrapper mb-3 mx-auto">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h5 class="fw-bold">Disponibilité</h5>
            <p class="text-muted small mb-0">À votre écoute 24/7</p>
          </div>
          <div class="col-md-3 text-center value-card" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-wrapper mb-3 mx-auto">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.1.7.9 1.3 1.6 1.5 2.5"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/></svg>
            </div>
            <h5 class="fw-bold">Compétence</h5>
            <p class="text-muted small mb-0">Experts qualifiés</p>
          </div>
          <div class="col-md-3 text-center value-card" data-aos="fade-up" data-aos-delay="300">
            <div class="icon-wrapper mb-3 mx-auto">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h5 class="fw-bold">Rigueur</h5>
            <p class="text-muted small mb-0">Qualité irréprochable</p>
          </div>
          <div class="col-md-3 text-center value-card" data-aos="fade-up" data-aos-delay="400">
            <div class="icon-wrapper mb-3 mx-auto">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h5 class="fw-bold">Efficacité</h5>
            <p class="text-muted small mb-0">Résultats garantis</p>
          </div>
        </div>
      </div>
    </section>

    <!-- À la rencontre de Acort Consulting -->
    <section class="py-5 bg-white">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
            <div class="position-relative">
              <div class="glass-panel p-2 rounded-5 shadow-lg overflow-hidden" style="border-radius: 2rem !important;">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team" class="img-fluid rounded-4 w-100 h-100" style="object-fit: cover; min-height: 400px; border-radius: 1.5rem !important;">
              </div>
              <!-- Decorative element -->
              <div class="position-absolute bg-brand-green opacity-10 rounded-circle" style="width: 200px; height: 200px; bottom: -30px; left: -30px; z-index: -1;"></div>
            </div>
          </div>
          <div class="col-lg-6 ps-lg-5" data-aos="fade-left">
            <h6 class="text-primary fw-bold text-uppercase mb-2 tracking-wide">Présentation</h6>
            <h2 class="display-5 fw-black mb-4">À la rencontre de <span class="text-gradient">Acort Consulting</span></h2>
            <p class="text-muted mb-4 lead" style="font-size: 1.1rem; font-weight: 500;">
              Née de l’union entre plusieurs experts chevronnés de différents secteurs, la société Acort-Consulting est présente sur le marché de la formation et des services depuis 20__.
            </p>
            <p class="text-muted mb-4">
              La société intervient dans les domaines de l’audit qualité, du BTP, de la consultation en gestion d’entreprise, de la formation professionnelle en aviation, de fournitures d’équipement informatiques, de la gestion immobilière, du recrutement et gestion d’interim et de la traduction.
            </p>
            <p class="text-muted mb-4">
              Acort-Consulting s’engage dans l’accomplissement d’un service de qualité irréprochable et dans le developpement durable de ses divers prestations, avec pour objectif d’impacter positivement ses secteurs d’activités puis de s’étendre à d’autres secteurs d’ici 5 ans.....
            </p>
            <router-link to="/qui-sommes-nous" class="btn btn-outline-primary fw-bold px-4 py-3 rounded-pill mt-3 shadow-sm">
              EN SAVOIR + SUR NOUS <i class="bi bi-arrow-right ms-2"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Aperçu des Prestations -->
    <section class="py-5 mt-5">
      <div class="container py-5">
        <div class="text-center mb-5" data-aos="fade-up">
          <h6 class="text-primary fw-bold text-uppercase mb-2 tracking-wide">Nos Domaines</h6>
          <h2 class="display-5 fw-black mb-3">Aperçu de nos prestations</h2>
          <div class="heading-line mx-auto"></div>
        </div>
        <div class="row g-4">
          <div class="col-md-6 col-lg-3" v-for="(service, index) in services" :key="index" data-aos="zoom-in" :data-aos-delay="index * 100">
            <div class="card h-100 border-0 shadow-lg service-card rounded-5 position-relative overflow-hidden text-white">
              <div class="card-body p-4 text-center z-index-2 d-flex flex-column">
                <div class="icon-box-premium mb-4 mx-auto d-flex align-items-center justify-content-center">
                  <div class="icon-inner text-white" v-html="service.svg"></div>
                </div>
                <h5 class="fw-bold mb-3 text-white">{{ service.title }}</h5>
                <p class="text-white opacity-85 small mb-4 flex-grow-1">{{ service.desc }}</p>
                <router-link to="/batiment-et-travaux-publics" class="btn-link-premium mt-auto text-decoration-none fw-bold small text-uppercase tracking-wider text-white">
                  En savoir +
                </router-link>
              </div>
              <!-- Gradients Backgrounds -->
              <div class="card-base-bg position-absolute top-0 start-0 w-100 h-100 z-index-0"></div>
              <div class="card-hover-bg-gradient position-absolute top-0 start-0 w-100 h-100 z-index-0 opacity-0"></div>
            </div>
          </div>
        </div>
        <div class="text-center mt-5 pt-3" data-aos="fade-up">
          <router-link to="/nos-services" class="btn btn-outline-primary fw-bold px-5 py-3 rounded-pill">Voir tous nos services <i class="bi bi-arrow-right ms-2"></i></router-link>
        </div>
      </div>
    </section>

    <!-- Témoignages -->
    <section class="py-5 bg-light overflow-hidden">
      <div class="container py-5">
        <div class="text-center mb-5" data-aos="fade-up">
          <h6 class="text-primary fw-bold text-uppercase mb-2 tracking-wide">Témoignages</h6>
          <h2 class="display-5 fw-black mb-3">Ce que nos clients disent</h2>
          <div class="heading-line mx-auto"></div>
        </div>
        
        <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000" data-aos="fade-up">
          <div class="carousel-inner">
            <div v-for="(group, gIndex) in testimonialGroups" :key="gIndex" :class="['carousel-item', { active: gIndex === 0 }]">
              <div class="row g-4 px-md-5">
                <div v-for="(testimonial, tIndex) in group" :key="tIndex" class="col-lg-6">
                  <div class="glass-panel p-4 h-100 rounded-5 border-0 shadow-sm d-flex flex-column" style="margin-bottom: 1rem;">
                    <div class="mb-3">
                      <span class="text-warning fs-5">★★★★★</span>
                    </div>
                    <p class="fst-italic text-muted mb-4 flex-grow-1" style="font-size: 1.1rem; line-height: 1.6;">"{{ testimonial.text }}"</p>
                    <div class="d-flex align-items-center mt-auto">
                      <div class="avatar-md rounded-circle bg-brand-green text-white d-flex align-items-center justify-content-center me-3 shadow-sm" style="width: 50px; height: 50px; font-weight: bold; font-size: 1.1rem;">
                        {{ testimonial.initials }}
                      </div>
                      <div class="text-start">
                        <h6 class="fw-bold mb-0 text-dark">{{ testimonial.name }}</h6>
                        <p class="small text-muted mb-0">{{ testimonial.role }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Custom Controls -->
          <div class="carousel-controls d-flex justify-content-center gap-3 mt-5">
            <button class="btn btn-white bg-white rounded-circle shadow-sm border p-0 d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <i class="bi bi-chevron-left fs-5 text-primary"></i>
            </button>
            <button class="btn btn-white bg-white rounded-circle shadow-sm border p-0 d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <i class="bi bi-chevron-right fs-5 text-primary"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Chiffres Clés (Premium Version) -->
    <section class="py-5 position-relative overflow-hidden bg-dark">
      <!-- Animated Background elements -->
      <div class="position-absolute top-0 start-0 w-100 h-100 opacity-10 pointer-events-none">
        <div class="blob blob-1" style="background: #4582FF; top: -20%; left: -10%;"></div>
        <div class="blob blob-2" style="background: #39B54A; bottom: -20%; right: -10%;"></div>
      </div>
      
      <div class="container py-5 position-relative z-index-2">
        <div class="row g-5 align-items-center">
          <div class="col-lg-5 text-start mb-5 mb-lg-0" data-aos="fade-right">
            <h6 class="text-primary fw-bold text-uppercase mb-2 tracking-wide">Performance</h6>
            <h2 class="display-4 fw-black text-white mb-4">Notre impact en <span class="text-gradient">quelques chiffres</span></h2>
            <p class="text-white opacity-75 lead">
              Depuis notre création, nous nous efforçons d'apporter une valeur ajoutée concrète à chacun de nos partenaires à travers le monde.
            </p>
          </div>
          
          <div class="col-lg-7">
            <div class="row g-4">
              <!-- Stat Card 1 -->
              <div class="col-md-6" data-aos="zoom-in" data-aos-delay="100">
                <div class="glass-panel p-4 rounded-5 border-0 h-100 stat-card-modern">
                  <div class="d-flex align-items-center mb-3">
                    <div class="stat-icon-wrapper rounded-4 p-3 me-3" style="background: rgba(69, 130, 255, 0.1); color: #4582FF;">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <h2 class="display-5 fw-black text-white mb-0 counter">175+</h2>
                  </div>
                  <h6 class="text-white opacity-50 text-uppercase tracking-wider fw-bold small">Clients satisfaits</h6>
                </div>
              </div>
              
              <!-- Stat Card 2 -->
              <div class="col-md-6" data-aos="zoom-in" data-aos-delay="200">
                <div class="glass-panel p-4 rounded-5 border-0 h-100 stat-card-modern">
                  <div class="d-flex align-items-center mb-3">
                    <div class="stat-icon-wrapper rounded-4 p-3 me-3" style="background: rgba(57, 181, 74, 0.1); color: #39B54A;">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <h2 class="display-5 fw-black text-white mb-0 counter">48</h2>
                  </div>
                  <h6 class="text-white opacity-50 text-uppercase tracking-wider fw-bold small">Certifications délivrées</h6>
                </div>
              </div>
              
              <!-- Stat Card 3 -->
              <div class="col-md-6" data-aos="zoom-in" data-aos-delay="300">
                <div class="glass-panel p-4 rounded-5 border-0 h-100 stat-card-modern">
                  <div class="d-flex align-items-center mb-3">
                    <div class="stat-icon-wrapper rounded-4 p-3 me-3" style="background: rgba(255, 193, 7, 0.1); color: #ffc107;">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                    </div>
                    <h2 class="display-5 fw-black text-white mb-0 counter">9</h2>
                  </div>
                  <h6 class="text-white opacity-50 text-uppercase tracking-wider fw-bold small">Cours disponibles</h6>
                </div>
              </div>

              <!-- Stat Card 4 -->
              <div class="col-md-6" data-aos="zoom-in" data-aos-delay="400">
                <div class="glass-panel p-4 rounded-5 border-0 h-100 stat-card-modern">
                  <div class="d-flex align-items-center mb-3">
                    <div class="stat-icon-wrapper rounded-4 p-3 me-3" style="background: rgba(13, 202, 240, 0.1); color: #0dcaf0;">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <h2 class="display-5 fw-black text-white mb-0 counter">5</h2>
                  </div>
                  <h6 class="text-white opacity-50 text-uppercase tracking-wider fw-bold small">Années d'ancienneté</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { Carousel } from 'bootstrap'

export default {
  name: 'HomeView',
  data() {
    return {
      services: [
        { 
          title: 'Audit Qualité', 
          desc: 'Évaluation formelle et indépendante du respect des dispositions qualité établies.', 
          svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14l2 2 4-4"/></svg>'
        },
        { 
          title: 'Gestion immobilière', 
          desc: 'Gestion professionnelle de terrains, immeubles et parkings pour soulager les propriétaires.', 
          svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M9 8h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3z"/><path d="M7 11h2"/><path d="M7 15h2"/></svg>'
        },
        { 
          title: 'Recrutement & Intérim', 
          desc: 'Maximisez la réussite de vos projets en engageant le personnel le plus qualifié.', 
          svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="16" y1="11" x2="22" y2="11"/></svg>'
        },
        { 
          title: 'BTP', 
          desc: 'Conception et réalisation d\'infrastructures dans le secteur du bâtiment et travaux publics.', 
          svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'
        },
        { 
          title: 'Gestion d\'entreprise', 
          desc: 'Conseils stratégiques pour assurer la pérennité et la réussite de votre société.', 
          svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>'
        },
        { 
          title: 'Équipements Informatiques', 
          desc: 'Solutions et fournitures informatiques adaptées à vos besoins technologiques.', 
          svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'
        },
        { 
          title: 'Formation en Aviation', 
          desc: 'Centre de formation doté d\'une expertise reconnue et d\'une gamme de produits certifiés.', 
          svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>'
        },
        { 
          title: 'Traduction Multilingue', 
          desc: 'Services de traduction dans de nombreuses combinaisons linguistiques (EN, FR, ES, DE, AR).', 
          svg: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>'
        }
      ],
      testimonials: [
        { name: 'Jean Dupont', role: 'Directeur Logistique', initials: 'JD', text: 'Une expertise inégalée dans le domaine de l\'aviation et du conseil stratégique. Acort Consulting nous a aidé à transformer nos processus opérationnels.' },
        { name: 'Marie Kouassi', role: 'Responsable RH', initials: 'MK', text: 'Les formations proposées sont d\'une qualité exceptionnelle. Nos équipes ont fait des progrès fulgurants en seulement quelques mois.' },
        { name: 'Alain Tcheka', role: 'Entrepreneur BTP', initials: 'AT', text: 'Rigueur et efficacité sont les mots qui définissent le mieux l\'accompagnement d\'Acort Consulting. Un partenaire de confiance.' },
        { name: 'Sarah Lefebvre', role: 'Responsable Qualité', initials: 'SL', text: 'Une approche très professionnelle et des résultats concrets. Nous recommandons vivement Acort Consulting pour tout projet d\'audit.' }
      ],
      heroSlides: [
        { url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80', alt: 'Expertise Acort' },
        { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', alt: 'Formation Technique' },
        { url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80', alt: 'Conseil Stratégique' }
      ]
    }
  },
  mounted() {
    // Initialisation du carrousel des témoignages
    const testimonialCarousel = document.getElementById('testimonialCarousel')
    if (testimonialCarousel) {
      new Carousel(testimonialCarousel, {
        interval: 5000,
        ride: 'carousel'
      })
    }

    // Initialisation du carrousel Hero
    const heroCarousel = document.getElementById('heroCarousel')
    if (heroCarousel) {
      new Carousel(heroCarousel, {
        interval: 4000,
        ride: 'carousel'
      })
    }
  },
  computed: {
    testimonialGroups() {
      const groups = [];
      for (let i = 0; i < this.testimonials.length; i += 2) {
        groups.push(this.testimonials.slice(i, i + 2));
      }
      return groups;
    }
  }
};
</script>

<style scoped>
/* Hero Typography */
.hero-title {
  font-size: 3.5rem;
  letter-spacing: -1.5px;
}
.fw-black {
  font-weight: 800;
}
.tracking-wide {
  letter-spacing: 2px;
}

/* Background Blobs */
.blob {
  position: absolute;
  filter: blur(80px);
  z-index: 0;
  opacity: 0.35;
  border-radius: 50%;
  animation: pulse-glow 10s infinite alternate;
}
.blob-1 {
  top: -10%; left: -10%; width: 500px; height: 500px;
  background: rgba(69, 130, 255, 0.3);
}
.blob-2 {
  bottom: -20%; right: -10%; width: 600px; height: 600px;
  background: rgba(122, 90, 248, 0.2);
  animation-delay: 2s;
}
.blob-3 {
  top: 40%; left: 50%; width: 400px; height: 400px;
  background: rgba(255, 184, 0, 0.15);
  animation-delay: 4s;
}

/* Grid Overlay */
.grid-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: 1;
}

/* Z-index helpers */
.z-index-0 { z-index: 0; }
.z-index-1 { z-index: 1; }
.z-index-2 { z-index: 2; }
.z-index-3 { z-index: 3; }

/* Avatars */
.avatars-group .avatar-sm {
  width: 45px; height: 45px;
  font-size: 0.8rem; font-weight: bold;
  margin-right: -15px;
  transition: transform 0.3s ease;
}
.avatars-group .avatar-sm:hover {
  transform: translateY(-5px);
  z-index: 10 !important;
}

/* Composition / Glass Cards */
.composition-wrapper {
  max-width: 500px;
  height: 500px;
}
.main-glass-card {
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
}
.floating-card-1 {
  bottom: 30px; left: -40px; width: 240px;
  animation: float 6s ease-in-out infinite;
}
.floating-card-2 {
  top: 40px; right: -30px; width: 200px;
  animation: float 8s ease-in-out infinite reverse;
}

/* Services section */
.heading-line {
  width: 60px; height: 4px;
  background: linear-gradient(90deg, var(--bs-primary), #39B54A);
  border-radius: 4px;
}
.service-card {
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  border: none !important;
  background: transparent !important;
}
.card-base-bg {
  background: linear-gradient(135deg, #4582FF 0%, #2A54FF 100%);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: 0 0 0 10px white;
  transition: all 0.4s ease;
}
.card-hover-bg-gradient {
  background: linear-gradient(135deg, #4582FF 0%, #39B54A 100%);
  box-shadow: 0 0 0 10px white;
  transition: all 0.4s ease;
}
.service-card:hover .card-hover-bg-gradient {
  opacity: 1;
}
.service-card:hover .card-base-bg {
  transform: scale(1.05);
}
.icon-box-premium {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  position: relative;
  transition: all 0.4s ease;
}
.icon-inner {
  transition: all 0.4s ease;
}
.service-card:hover .card-gradient-bg {
  transform: scale(1.1);
  filter: hue-rotate(10deg);
}
.service-card:hover .icon-box-premium {
  background: rgba(255, 255, 255, 0.35);
  transform: rotate(10deg) scale(1.1);
}
.service-card:hover .icon-inner {
  transform: rotate(-10deg);
}
.btn-link-premium {
  transition: all 0.3s ease;
  opacity: 0.8;
}
.service-card:hover .btn-link-premium {
  opacity: 1;
  transform: translateX(5px);
}
.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(57, 181, 74, 0.3) !important;
}
.opacity-0 { opacity: 0; }
.transition-all { transition: all 0.4s ease; }
.value-card {
  position: relative;
}
.value-card:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0; top: 20%; height: 60%; width: 1px;
  background: rgba(0,0,0,0.05);
}
.icon-wrapper {
  width: 60px; height: 60px;
  background: rgba(69, 130, 255, 0.05);
  border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  transform: rotate(-10deg);
  transition: all 0.3s ease;
}
.value-card:hover .icon-wrapper {
  transform: rotate(0deg) scale(1.1);
  background: rgba(69, 130, 255, 0.1);
}

@media (max-width: 991px) {
  .hero-title { font-size: 2.5rem; }
  .floating-card-1 { left: 10px; }
  .floating-card-2 { right: 10px; }
  .value-card::after { display: none; }
}

/* Stat Modern Cards */
.stat-card-modern {
  background: rgba(255, 255, 255, 0.03) !important;
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
  transition: all 0.4s ease;
}
.stat-card-modern:hover {
  background: rgba(255, 255, 255, 0.07) !important;
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.1) !important;
}
.stat-icon-wrapper {
  transition: all 0.4s ease;
}
  .stat-card-modern:hover .stat-icon-wrapper {
    transform: scale(1.1) rotate(5deg);
  }

  /* Custom Hero Transition: Right to Bottom */
  .hero-img-fixed {
    height: 480px !important;
    width: 100%;
  }

  .custom-transition {
    transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1) !important;
  }

  /* Entrance from right */
  .carousel-item-next.custom-transition,
  .carousel-item-prev.custom-transition {
    transform: translateX(100%) !important;
    opacity: 1 !important;
    display: block !important;
    position: absolute;
    top: 0;
    left: 0;
  }

  .active.custom-transition {
    transform: translateX(0) !important;
  }

  /* Exit to bottom with fade */
  .carousel-item-start.custom-transition {
    transform: translateY(100%) !important;
    opacity: 0 !important;
    transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.8s ease-out !important;
    z-index: 1;
  }

  .carousel-item-next.carousel-item-start.custom-transition {
    transform: translateX(0) !important;
    z-index: 2;
  }
</style>
