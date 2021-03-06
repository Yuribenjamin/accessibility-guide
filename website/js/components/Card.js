import { h } from "hyperapp";
import { cc, EXPERTISE_STRINGS } from "../utils";
import Icon from "./Icon";
import Markdown from "./Markdown";

export default ({ name, shortTip, longTip, links, category }) => (
  state,
  actions
) => (
  <li
    class={`card ${category.replace(/\s/g, "-")}`}
    key={name}
    id={name.slice(0, name.length - 3)}
  >
    <span class={`category ${category.replace(/\s/g, "-")}`}>{category}</span>
    <Markdown node="h2" class="short-tip" content={shortTip} />
    <Markdown node="p" class="long-tip" content={longTip} />
    {links.length > 0 && (
      <section>
        <p class="resource-title">Resources</p>
        <ul class="resource-list">
          {links.map(link => (
            <Markdown node="li" class="resource" content={link} />
          ))}
        </ul>
      </section>
    )}
  </li>
);
