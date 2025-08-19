<script>
import {Divider} from "primevue";
import {useCurrentUserStore} from 'src/app/shared/services/current-user.service.js'

export default {
  name: "app-sidebar",
  components: {
    Divider
  },
  props: {
    menuItems: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    $t,
    onLogOut(){
      this.$router.push("/login")
    }
  }

}
</script>]
<template>
  <div class="custom-sidenav">
    <!--Logo-->
    <div class="logo-container">
      <img src="@/assets/img/principal-logo.png" alt="BikeShare logo" class="logo" />
      <Divider class="logo-divider"/>
    </div>

    <!--Menu Items-->
    <div class="nav-items">
      <router-link
          v-for="item in menuItems"
         :key="item.link"
          :to="item.link"
          class="p-ripple menu-link"
          active-class="active">
        <div class="menu-item-content">
          <i :class="item.icon"></i>
          <span>{{$t(item.label)}}</span>
        </div>
      </router-link>
    </div>

    <!--LogOut-->
    <div class="logout-container">
      <a href="#" class="p-ripple menu-link" @click.prevent="onLogOut">
        <div class="menu-item-content">
          <i class="pi pi-sign-out"></i>
          <span>{{$t('Sidebar.Logout')}}</span>
        </div>
      </a>
    </div>

  </div>

</template>
<style scoped>
.custom-sidenav {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  flex-direction: column;
  background: #FFD38F;
  color: black;
  overflow-y: hidden;
  overflow-x: hidden;
}

.logo-container {
  text-align: center;
  padding: 32px 0;
}

.logo {
  width: 200px;
  transition: transform 0.2s;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-divider {
  margin: 1px auto;
  width: 80%;
  background-color: rgba(0, 0, 0, 0.2);
}

.nav-items {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 16px;
}

.logout-container {
  padding: 20px 16px;
}

.menu-link {
  padding: 0;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
}

.menu-link.active {
  background: rgba(0, 0, 0, 0.15);
}

.menu-link:hover {
  background: rgba(0, 0, 0, 0.1);
}

.menu-item-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-weight: bold;
  font-size: 1.05rem;
  width: 88%;
  padding: 14px 0;
}

.menu-item-content i {
  font-size: 1.5rem;
}
</style>