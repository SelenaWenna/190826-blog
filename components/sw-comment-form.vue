<template lang="pug">
v-card.mt-12
  v-toolbar.sw-toolbar(
    color="light-blue"
    dark
    ) Wright comment
  v-card-text
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
        label="Comment"
        required
        )
      v-btn.mr-4(
        :disabled="!valid"
        color="success"
        @click="tryToSendForm"
        ) Post comment
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    postId: {
      type: Number,
      default: 0
    }
  },
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
      v => !!v || 'Comment is required'
    ]
  }),

  methods: {
    ...mapActions([
      'addComment'
    ]),
    tryToSendForm () {
      // This functionality works in demo!

      // TODO:
      // 1. Validate form with plugin (VeeValidate or Vuelidate)
      // 2. Send POST http-query with axios
      // 3. Then output snackbar in success or error status (in depending on server response)
      // 4. Redirect or clear form
      if (this.$refs.form.validate()) {
        this.addComment({
          postId: this.postId,
          name: this.name,
          email: this.email,
          body: this.message
        })
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
