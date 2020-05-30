export default function stageView(stage) {
  document.querySelector(`#stage-${stage}`)
    .classList.toggle('active-stage');
}