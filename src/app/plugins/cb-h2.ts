declare var $: any;

export class AddH2Component {
  constructor(){}

    // H2 Tag HTML
    addH2TagHTMLCode = (uid) => {

      $(`#cb-buttons-${uid}`).append(`
      <!-- h2 tag -->
      <div class="tool box2 m-1">
        <button class="btn btn-light" id="add-h2-box2-${uid}">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-type-h2" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.638 13V3.669H6.38V7.62H1.759V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V13H15.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z" />
          </svg>
        </button>
      </div>
      `)
    }
    // Add H2 tag click action
    addH2TagClickFunction = (uid) => {
      $(`#add-h2-box2-${uid}`).click(() => {
        $(`#cb-box-2-${uid}`).removeClass('cb-H1 cb-H3').addClass('cb-H2');
      });
    }

    addH2TagToolBox = (uid) => {
      $(`#cb-box-2-${uid}`).removeClass('cb-H1 cb-H3').addClass('cb-H2');
    }
}
