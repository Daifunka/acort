<template>
  <div class="services-view">
    <!-- Hero Section -->
    <section class="hero-section bg-light py-5 border-bottom">
      <div class="container text-center" data-aos="fade-up">
        <h1 class="display-4 fw-bold text-primary mb-3 mt-5">Nos Services</h1>
        <p class="lead text-muted mx-auto" style="max-width: 700px;">
          Une expertise multisectorielle pour répondre à tous vos défis de croissance et d'organisation.
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-5 bg-white">
      <div class="container py-4">
        <div class="row g-5">
          <!-- Aviation -->
          <div class="col-lg-4 col-md-6" v-for="(service, index) in services" :key="index" data-aos="fade-up" :data-aos-delay="index * 100">
            <div class="card h-100 border-0 shadow-sm rounded-4 service-card">
              <div class="card-body p-4 d-flex flex-column">
                <div class="icon-box text-primary bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style="width: 60px; height: 60px; font-size: 1.5rem;">
                  {{ service.icon }}
                </div>
                <h4 class="fw-bold mb-3">{{ service.title }}</h4>
                <p class="text-muted mb-4">{{ service.description }}</p>
                <div class="mt-auto">
                  <router-link :to="service.title === 'Immobilier & BTP' ? '/batiment-et-travaux-publics' : '#contact'" class="fw-bold text-primary text-decoration-none d-flex align-items-center">
                    En savoir plus <i class="bi bi-arrow-right ms-2"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-5 bg-primary text-white text-center">
      <div class="container py-4" data-aos="zoom-in">
        <h2 class="fw-bold mb-4">Besoin d'un accompagnement personnalisé ?</h2>
        <p class="lead opacity-75 mb-4 mx-auto" style="max-width: 600px;">Contactez nos experts pour discuter de vos besoins et découvrir comment nous pouvons vous aider à atteindre vos objectifs.</p>
        <a href="mailto:contact@acort-consulting.com" class="btn btn-light btn-lg px-5 fw-bold text-primary rounded-pill">Nous Contacter</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ServicesView',
  data() {
    return {
      services: [
        {
          title: 'Aviation',
          description: 'Formations spécialisées pour les métiers de l\'air et accompagnement réglementaire.',
          icon: '✈️'
        },
        {
          title: 'Audit & Conseil',
          description: 'Accompagnement en audit qualité, stratégie d\'entreprise et optimisation des processus.',
          icon: '📋'
        },
        {
          title: 'RH & Recrutement',
          description: 'Gestion de l\'intérim, recrutement de talents, chasse de tête et gestion de carrière.',
          icon: '👥'
        },
        {
          title: 'Immobilier & BTP',
          description: 'Gestion immobilière, conseils en investissement, et supervision de travaux.',
          icon: '🏗️'
        },
        {
          title: 'IT & Fournitures',
          description: 'Solutions informatiques, transformation digitale et fourniture de matériel de bureau.',
          icon: '💻'
        },
        {
          title: 'Langues & Traduction',
          description: 'Services multilingues (Anglais, Français, Espagnol, Allemand, Arabe) et traduction.',
          icon: '🌐'
        }
      ]
    }
  }
}
</script>

<style scoped>
.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0,0,0,0.05) !important;
}
.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 1rem 3rem rgba(0,0,0,.1) !important;
}
.icon-box {
  transition: background-color 0.3s ease, color 0.3s ease;
}
.service-card:hover .icon-box {
  background-color: var(--bs-primary) !important;
  color: white !important;
}
</style>
