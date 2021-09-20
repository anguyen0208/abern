// import {css} from 'styled-components';

export const media = {
    retina: "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)",
    media_xxxl: "(min-width: 1920px)",
    media_xxl: "(max-width: 1700px)",
    media_xl: "(max-width: 1199px)",
    media_lg: "(max-width: 991px)",
    media_md: "(max-width: 767px)",
    media_sm: "(max-width: 575px)",
}
// Paths
// img:   "../img/"',
// fonts: "../fonts/"',
// icons: "../icons/"',

//=============================
// Colors
//=============================

export const colors = {
    white:      '#ffffff',
    gray:       '#747474',
    grayLight:  '#fbfbfb',
    grayDark:   '#2b2b2b',
    blue:       '#72a9e5',
    indigo:     '#7253e6',
    purple:     '#aa88e1',
    pink:       '#e691b8',
    red:        '#e46571',
    orange:     '#ffad68',
    yellow:     '#ffe082',
    green:      '#7fd092',
    teal:       '#6fdcbc',
    cyan:       '#17a2b8',

// Body
    body_text_primary_color:       '#747474',
    body_text_secondary_color:     '#747474',
    body_headline_color:           '#2b2b2b',
    body_links_color:              '#2b2b2b',
    body_links_hover_color: '#2b2b2b',
    body_background_color: '#ffffff',

    body_main_element_color: '#fed9ca',
    body_text_clone_color: '#fbfbfb',
    body_date_color: '#2b2b2b',
    body_mark_background: '#fcf8e3',
    body_border_color: '#f3f3f3',

// Menu primary
    menu_primary_links_color: '#c5c5c5',
    menu_primary_links_hover_color: '#2b2b2b',
    menu_primary_links_active_color: '#2b2b2b',
    menu_primary_links_element_color: '#fed9ca',

// Menu secondary
    menu_secondary_links_color: '#2b2b2b',
    menu_secondary_links_hover_color: '#2b2b2b',
    menu_secondary_links_active_color: '#747474',

// Forms
    input_text_color: '#747474',
    input_border_focus_color: '#2b2b2b',

// Form primary
    input_background_primary_color: '#f8f8f8',
    input_border_primary_color: 'transparent',

// Form secondary
    input_background_secondary_color: 'transparent',
    input_border_secondary_color: '#cacaca',

// Gallery
    gallery_filter_button_color: '#747474',
    gallery_filter_button_hover_color: '#2b2b2b',
    gallery_filter_button_active_color: '#2b2b2b',

    gallery_item_text_color: '#ffffff',
    gallery_item_background_color: 'rgba(44, 44, 44, 0.96)',

// Modal
    modal_background_color: '#ffffff',
    modal_background_content_color: 'transparent',

// Card
    card_border_color: '#e1e1e1',
    card_background_color: 'transparent',

// Widget
    widget_background_color: '#ffffff',
    widget_border_color: '#cacaca',
    widget_element_color: '#2b2b2b',
}
//=============================
// Fonts
//=============================
export const fonts = {
    lora: 'Lora-Regular, sans-serif',
    lora_b: 'Lora-Bold, sans-serif',
    ubuntu: 'Ubuntu-Regular, sans-serif',
    ubuntu_b: 'Ubuntu-Bold, sans-serif',

    font_primary: this.lora,
    font_primary_bold: this.lora_b,
    font_secondary: this.ubuntu,
    font_secondary_bold: this.ubuntu_b,

    font_menu_primary: this.ubuntu_b,

    f_size_df: '0.88rem', // 14px
    f_size_lg: '1rem',    // 16px
}
//=============================
// Spacing
//=============================
export const spacing = {
    space_xl: '8.13rem',   // 130px
    space_lg: '3.75rem',   // 60px
    space_md: '2.38rem',   // 38px
    space_sm: '1.88rem',   // 30px
    space_xs: '1.63rem',   // 26px
}

//=============================
// Header
//=============================
export const headerVar = {
    header_padding_t: '1.91rem',
    header_padding_b: '1.91rem',
}

//=============================
// Main
//=============================
export const mainVar = {
    main_padding_t: '5px',
    main_padding_b: '2rem',
}

//=============================
// Footer
//=============================
export const footerVar = {
    footer_padding_t: '3.07rem',
    footer_padding_b: '3.07rem',
}

//=============================
// Wrapper
//=============================
export const wrapper = {
    wrapper_max_w: '1920px',
}

//=============================
// Transition s
//=============================
export const transitionVar = {
    transitionS: '0.3s',
}

//=============================
// Components
//=============================
export const componentsVar = {
    border_radius: '0',
    border_radius_sm: '0',
    border_radius_lg: '0',
}

//=============================
// Typography
//=============================
export const typoVar = {
    line_height_base: '1',
}

//=============================
// Links
//=============================
export const linkVar = {
    body_links_hover_decoration: 'none',
}

//=============================
// Buttons
//=============================
export const buttonVar = {
    button_focus_width: '0',
}

//=============================
// Modal
//=============================
export const modalVar ={
    modal_backdrop_opacity: '1',
}
//=============================
// Alert
//=============================
export const alertVar = {
    alert_padding_y:                          '1rem',
    alert_padding_x:                          '1rem',
    alert_margin_bottom:                      spacing.space_sm,
    alert_border_radius:                      '0',
}
//=============================
// Forms
//=============================
export const formsVar ={
    input_padding_y:                          '1.13rem',
    input_padding_x:                          '0',
    input_font_size:                          '1rem',
    input_line_height:                        '1.88',
    input_border_radius:                      '0',
    input_focus_box_shadow:                   'inherit',
//=============================
// Buttons + Forms
//=============================
    input_btn_focus_box_shadow:               'inherit',
}