<template>
  <div class="login-comp">
    <form>
      <h3>Login</h3>

      <!-- email -->
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="cred" id="email" />
      </div>

      <!-- password -->
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="cred" id="password" />
      </div>

      <!-- submit button -->
      <button class="submit-btn">Login</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../sass/variables";

.login-comp {
  // background-color: #eee;
  display: flex;
  justify-content: center;

  form {
    display: inline-block;
    margin-top: 5vh;
    padding: 15px;
    background-color: $dark;
    border-radius: 5px;

    h3 {
      text-align: center;
      color: $green;
    }

    label {
      color: $green;
      font-size: 17px;
      font-weight: 500;
    }
  }

  .cred {
    display: block;
    width: 300px;
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 5px 10px;
    font-size: 17px;
  }

  .submit-btn {
    color: white;
    background-color: $green;
    padding: 5px 10px;
    font-size: 17px;
    font-weight: 500;
    border-radius: 5px;
    border: none;
    outline: none;
  }
}
</style>