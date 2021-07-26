<script lang="jsx">
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0);
    const add = () => {
      count.value ++;
    }
    return () => (
      <>
        <div>home</div>
        <p>{count.value}</p>
        <button onClick={add}>add</button>
      </>
    )
  }
}
</script>