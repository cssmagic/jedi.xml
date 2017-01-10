const list = `
active
clearfix
current
disabled
hover
link
subview
bx-
cmui
no-js
cm-btn
cm-btn-bordered
cm-btn-xl
cm-btn-l
cm-btn-s
cm-btn-xs
cm-btn-primary
cm-btn-info
cm-btn-success
cm-btn-danger
cm-btn-warning
cm-btn-line
cm-btn-group
cm-btn-switch
cm-btn-item
cm-btn-wrapper
      -bordered
      -xl
      -l
      -s
      -xs
      -primary
      -info
      -success
      -danger
      -warning
      -line
      -group
      -switch
      -item
      -wrapper

cm-dialog
cm-dialog-ready
         -ready

cm-form
cm-form-ctrl
cm-form-ctrl-value
cm-form-ctrl-value-with-right-arrow
       -ctrl
cm-form-dual-select
       -dual-select
cm-form-error
cm-form-image
cm-form-image-btn-add
cm-form-image-btn-remove
cm-form-image-item
cm-form-image-status-failed
cm-form-image-status-loading
cm-form-image-title
cm-form-image-wrapper
       -image
                 -add
                 -remove
             -status-failed
             -status-loading
cm-form-label
       -label
cm-form-line
cm-form-note
cm-form-note-error
cm-form-note-minor
       -note
            -minor
cm-form-option-list
       -option-list
cm-form-placeholder
       -placeholder
cm-form-range-select
       -range-select
cm-form-select-wrapper
       -select-wrapper
cm-form-unit
       -unit

cm-grid-list
cm-grid-list-flexible
cm-grid-list-with-long-text
            -flexible
            -with-long-text

cm-icon
cm-icon-x20-msg-error
cm-icon-x20-msg-info
cm-icon-x20-msg-success
cm-icon-x20-msg-warning
cm-icon-x50-loading-black-bg
       -x20-msg-error
       -x20-msg-info
       -x20-msg-success
       -x20-msg-warning
       -x50-loading-black-bg

cm-label
cm-label-solid
        -solid
cm-label-l
cm-label-s
cm-label-xl

cm-list
cm-list-with-right-arrow
       -with-right-arrow

cm-loading
cm-loading-text
          -text

cm-mask

cm-msg-box
cm-msg-box-error
cm-msg-box-info
cm-msg-box-success
cm-msg-box-warning
cm-msg-box-close-btn
cm-msg-box-with-close-btn
cm-msg-box-with-icon
          -close-btn
          -with-close-btn
          -with-icon

cm-nav-bar
cm-nav-bar-left
cm-nav-bar-right
cm-nav-bar-title
          -left
          -right
          -title

cm-panel
cm-panel-content
        -content
cm-panel-header
cm-panel-header-btn
cm-panel-header-btn-minor
cm-panel-header-left
cm-panel-header-right
cm-panel-header-title
               -btn

cm-scroll-box

cm-section-content
cm-section-title

cm-text
cm-toast
cm-x20
cm-x30
cm-x40
cm-x50
`.split(/\s+/).filter((item) => {
	return !!item
})

const classNames = [...new Set(list)]

// console.log(list.length)
// console.log(classNames.length)
// console.log(classNames.join('\n'))
console.log(classNames.join(';'))
