export default function(context) {
  return context.store.dispatch('cms/loadSettings');
}