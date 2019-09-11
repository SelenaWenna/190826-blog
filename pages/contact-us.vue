<template lang="pug">
div
  .sw-title.headline.light-blue--text Contact us
  v-form(
    ref="form"
    v-model="valid"
    )
    v-text-field(
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    )
    v-text-field(
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      )
    v-textarea.mt-4(
      v-model="message"
      :rules="messageRules"
      outlined
      auto-grow
      name="input-7-4"
      label="Message"
      required
      )
    v-checkbox.mt-0(
      v-model="checkbox"
      color="success"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="I agree to the processing of personal data"
      required
      )

    v-btn.mr-4(
      :disabled="!valid"
      color="success"
      @click="tryToSendForm"
      ) Send
  v-snackbar(
    v-model="snackbar"
    color="success"
    dark
    top
    :timeout="5000"
    )
    v-layout.align-center
      v-flex
        div The message sent.
      v-btn(
        text
        @click="snackbar = false"
        ) Close
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    message: '',
    messageRules: [
      v => !!v || 'Message is required'
    ],
    checkbox: false,
    snackbar: false
  }),

  methods: {
    tryToSendForm () {
      // This functionality works in demo!

      // TODO:
      // 1. Validate form with plugin (VeeValidate or Vuelidate)
      // 2. Send POST http-query with axios
      // 3. Then output snackbar in success or error status (in depending on server response)
      // 4. Redirect or clear form
      if (this.$refs.form.validate()) {
        this.snackbar = true
        this.resetForm()
      }
    },
    resetForm () {
      this.$refs.form.reset()
    }
  }
}
</script>
