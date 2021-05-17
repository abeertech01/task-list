<template>
  <div class="signup-comp">
    <form>
      <h3>Signup</h3>
      <!-- name -->
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="cred" id="name" />
      </div>

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

      <!-- Confirm password -->
      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" class="cred" id="confirmPassword" />
      </div>

      <!-- submit button -->
      <button class="submit-btn">Signup</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../sass/variables";

.signup-comp {
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