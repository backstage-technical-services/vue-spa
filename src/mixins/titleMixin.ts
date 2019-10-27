import Vue from 'vue'

const getTitle = (vue: Vue): string | null => {
  const { $data: { $title } } = vue

  if (!$title) {
    return null
  }

  if (typeof $title === 'function') {
    return $title()
  }

  return $title
}

export default Vue.extend({
  created() {
    const title = getTitle(this)

    if (title) {
      document.title = `${title} :: Backstage Technical Services`
    }
  }
})
