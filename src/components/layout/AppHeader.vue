<template>
  <div class="fixed-top mt-3 px-3 px-md-0 z-index-master">
    <nav class="navbar navbar-expand-lg navbar-light glass-panel rounded-pill mx-auto px-4 py-2" style="max-width: 1200px;">
      <div class="container-fluid">
        <router-link class="navbar-brand d-flex align-items-center" to="/">
          <img src="@/assets/logo-acort-consulting22.png" alt="Acort Consulting" height="50" class="me-2">
        </router-link>
        
        <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center">
            <li class="nav-item mx-1">
              <router-link class="nav-link custom-nav-link" active-class="active" to="/" @click="closeMenu">Accueil</router-link>
            </li>
            <li class="nav-item mx-1">
              <router-link class="nav-link custom-nav-link" active-class="active" to="/qui-sommes-nous" @click="closeMenu">Qui sommes-nous</router-link>
            </li>
            <li class="nav-item dropdown mx-1">
              <a class="nav-link custom-nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Nos Services
              </a>
              <ul class="dropdown-menu border-0 shadow-lg glass-panel mt-3 rounded-4 p-2 animate-dropdown" aria-labelledby="navbarDropdown" style="min-width: 300px;">
                <li><router-link class="dropdown-item rounded-3 py-2" to="/formation-professionnelle-en-aviation" @click="closeMenu">Formation Professionnelle en Aviation</router-link></li>
                <li><router-link class="dropdown-item rounded-3 py-2" to="/traduction-anglais-francais-espagnol-allemand-arabe" @click="closeMenu">Traduction (EN, FR, ES, DE, AR)</router-link></li>
                <li><router-link class="dropdown-item rounded-3 py-2" to="/batiment-et-travaux-publics" @click="closeMenu">Bâtiment et Travaux Publics</router-link></li>
                <li><router-link class="dropdown-item rounded-3 py-2" to="/consultation-en-gestion-dentreprise" @click="closeMenu">Consultation en Gestion d’entreprise</router-link></li>
                <li><router-link class="dropdown-item rounded-3 py-2" to="/gestion-immobiliere" @click="closeMenu">Gestion Immobilière</router-link></li>
                <li><router-link class="dropdown-item rounded-3 py-2" to="/fournitures-dequipements-informatiques" @click="closeMenu">Fournitures d’Équipements Informatiques</router-link></li>
                <li><router-link class="dropdown-item rounded-3 py-2" to="/recrutement-et-gestion-dinterim" @click="closeMenu">Recrutement et Gestion d’intérim</router-link></li>
                <li><router-link class="dropdown-item rounded-3 py-2" to="/audit-qualite" @click="closeMenu">Audit Qualité</router-link></li>
              </ul>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <router-link to="/contact" class="btn btn-primary btn-sm px-4 py-2 rounded-pill shadow-sm fw-bold" @click="closeMenu">Nous Contacter</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    closeMenu() {
      // Fermer le collapse (menu mobile)
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        // On utilise l'instance Bootstrap si elle existe, sinon on manipule le DOM
        try {
          const bsCollapse = new window.bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        } catch (e) {
          navbarCollapse.classList.remove('show');
        }
      }
      
      // Fermer manuellement les dropdowns ouverts
      const dropdowns = document.querySelectorAll('.dropdown-menu.show');
      dropdowns.forEach(dd => dd.classList.remove('show'));
      
      const dropdownToggles = document.querySelectorAll('.dropdown-toggle.show');
      dropdownToggles.forEach(dt => {
        dt.classList.remove('show');
        dt.setAttribute('aria-expanded', 'false');
      });
    }
  }
}
</script>

<style scoped>
.z-index-master {
  z-index: 1050;
}
.fw-black {
  font-weight: 800;
}
.logo-mark {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, var(--bs-primary) 0%, #7A5AF8 100%);
  border-radius: 8px;
  transform: rotate(45deg);
}

.custom-nav-link {
  font-weight: 600;
  color: #475569 !important;
  font-size: 0.95rem;
  padding: 0.5rem 1rem !important;
  border-radius: 50px;
  transition: all 0.3s ease;
  position: relative;
}

.custom-nav-link:hover {
  color: var(--bs-primary) !important;
  background-color: rgba(69, 130, 255, 0.05);
}

.custom-nav-link.active {
  color: var(--bs-primary) !important;
  background-color: rgba(69, 130, 255, 0.1);
}

.dropdown-item {
  font-weight: 500;
  font-size: 0.9rem;
  color: #475569;
  transition: all 0.2s;
}

.dropdown-item:hover {
  background-color: rgba(69, 130, 255, 0.1);
  color: var(--bs-primary);
  transform: translateX(5px);
}

.dropdown-menu.glass-panel {
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.animate-dropdown {
  animation: dropIn 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  transform-origin: top center;
}

@keyframes dropIn {
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
