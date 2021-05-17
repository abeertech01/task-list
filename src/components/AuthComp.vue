<template>
  <div class="auth-comp">
    <div class="name">
      <h1>Abeer</h1>
    </div>

    <!-- Auth -->
    <div class="auth" v-if="!store.state.isAuthenticated">
      <button class="auth-btn login-signup" @click="authButton">
        {{ loginOrSignup }}
      </button>
      <button class="auth-btn auth-opposite" @click="toggleAuth">
        {{ instead }}
      </button>
    </div>

    <!-- Logout -->
    <div class="logout" v-else>
      <button class="auth-btn logout-btn">Logout</button>
    </div>
  </div>
</template>

<script>
import { ref, inject } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = inject("store");
    const router = useRouter();

    const loginOrSignup = ref("Login");
    const instead = ref("Signup instead");

    const toggleAuth = function () {
      if (loginOrSignup.value === "Login") {
        loginOrSignup.value = "Signup";
        instead.value = "Login instead";
      } else {
        loginOrSignup.value = "Login";
        instead.value = "Signup instead";
      }
    };

    const authButton = function () {
      if (loginOrSignup.value === "Login") {
        router.push("/login");
      } else {
        router.push("/signup");
      }
    };

    return {
      store,
      loginOrSignup,
      instead,
      toggleAuth,
      authButton,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables";

.auth-comp {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;

  .name {
    position: relative;
    bottom: 4px;
    font-family: "Sansita", sans-serif;
  }

  .auth-btn {
    padding: 5px 10px;
    font-size: 18px;
    cursor: pointer;
    font-weight: 550;
    border: none;
    outline: none;
    border-radius: 5px;
    font-family: "Roboto", sans-serif;
  }

  .logout {
    .logout-btn {
      background-color: $dark;
      color: $green;
    }
  }

  .auth {
    .login-signup {
      margin-right: 5px;
      background-color: $dark;
      color: $green;
    }

    .auth-opposite {
      color: white;
      background-color: $green;
    }
  }
}
</style>