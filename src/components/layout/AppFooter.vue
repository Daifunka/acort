<template>
  <footer class="bg-dark text-white pt-5 pb-3 mt-auto">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-4">
          <img src="@/assets/logo-acort-consulting22.png" alt="Acort Consulting" height="60" class="mb-3 bg-white p-2 rounded shadow-sm">
          <p class="text-light opacity-75 small lh-lg">
            Nous sommes des professionnels de l’aviation, de l’habitat et de l’informatique spécialisés dans : Audit Qualité – Consultation – Recrutement – Formation – Traduction – Bâtiment & Travaux Publics – Consommables Informatiques.
          </p>
        </div>
        <div class="col-lg-4 mb-4">
          <h5 class="text-uppercase mb-3 fw-bold">Liens Rapides</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><router-link to="/" class="text-light opacity-75 text-decoration-none hover-primary">Accueil</router-link></li>
            <li class="mb-2"><router-link to="/qui-sommes-nous" class="text-light opacity-75 text-decoration-none hover-primary">Qui sommes-nous</router-link></li>
          </ul>
        </div>
        <div class="col-lg-4 mb-4">
          <h5 class="text-uppercase mb-3 fw-bold">Contact</h5>
          <ul class="list-unstyled text-light opacity-75">
            <li class="mb-3 d-flex align-items-center">
              <i class="bi bi-envelope-fill text-primary me-3 fs-5"></i>
              <span>contact@acort-consulting.com</span>
            </li>
            <li class="mb-3 d-flex align-items-center">
              <i class="bi bi-telephone-fill text-primary me-3 fs-5"></i>
              <span>+229 01 64 48 40 40</span>
            </li>
            <li class="mb-3 d-flex align-items-center">
              <i class="bi bi-geo-alt-fill text-primary me-3 fs-5"></i>
              <span>Agla, Cotonou Bénin</span>
            </li>
          </ul>
        </div>
      </div>
      <hr class="mt-4 mb-3 border-secondary opacity-25">
      <div class="text-center text-light opacity-50 small">
        &copy; {{ new Date().getFullYear() }} Acort Consulting. Tous droits réservés.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.hover-primary:hover {
  color: var(--bs-primary) !important;
  opacity: 1 !important;
}
</style>
