import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld";
import "./App.css";

export default defineComponent({
  props: {},

  setup() {
    return () => (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
          </a>
          <a href="https://vuejs.org/" target="_blank">
            <img src="/static/img/vue.svg" class="logo vue" alt="Vue logo" />
          </a>
        </div>
        <HelloWorld msg="Vite + Vue" />
      </>
    );
  },
});
