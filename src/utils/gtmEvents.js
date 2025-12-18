/**
 * Centralized Event Tracking System for GTM Integration
 * This file contains all custom events that can be reused across the landing page
 */

/**
 * Generic event tracking function for GTM integration
 * @param {string} eventName - Name of the event
 * @param {object} eventData - Data to be sent with the event
 */
export const trackEvent = (eventName, eventData = {}) => {
  // Push to dataLayer for Google Tag Manager
  if (typeof window !== 'undefined' && typeof window.dataLayer !== 'undefined') {
    const eventObject = {
      'event': eventName,
      'timestamp': new Date().toISOString(),
      ...eventData
    }
    
    window.dataLayer.push(eventObject)
    console.log('Event tracked:', eventName, eventObject)
  } else {
    console.warn('dataLayer not available for event:', eventName)
  }
  
  // Also dispatch a CustomEvent for any other listeners
  if (typeof window !== 'undefined') {
    const customEvent = new CustomEvent('customEventTracked', {
      detail: {
        eventName: eventName,
        eventData: eventData
      },
      bubbles: true,
      cancelable: true
    })
    
    document.dispatchEvent(customEvent)
  }
}

/**
 * Track form submission event
 * @param {object} formData - Form data to be tracked
 * @param {string} formId - Identifier for the form
 */
export const trackFormSubmit = (formData, formId = 'hostel-enquiry-form') => {
  // Dispatch dpsFormSubmitted event
  const dpsEvent = new CustomEvent('dpsFormSubmitted', {
    detail: {
      message: 'DPS Nacharam Hostel admission form submitted successfully',
      formData: formData,
      formId: formId
    },
    bubbles: true,
    cancelable: true
  })
  
  // Dispatch formSubmit event
  const formSubmitEvent = new CustomEvent('formSubmit', {
    detail: {
      message: 'DPS Nacharam Hostel admission form submitted successfully',
      formData: formData,
      formId: formId
    },
    bubbles: true,
    cancelable: true
  })
  
  // Dispatch events on document and window
  document.dispatchEvent(dpsEvent)
  document.dispatchEvent(formSubmitEvent)
  window.dispatchEvent(dpsEvent)
  window.dispatchEvent(formSubmitEvent)
  
  // Track to GTM dataLayer
  trackEvent('dpsFormSubmitted', {
    formId: formId,
    formData: formData
  })
  
  trackEvent('formSubmit', {
    formId: formId,
    formData: formData
  })
}

/**
 * Track phone number click event
 * @param {string} phoneNumber - The phone number clicked
 * @param {string} elementText - Text content of the clicked element
 */
export const trackPhoneClick = (phoneNumber, elementText = '') => {
  trackEvent('mobevenT', {
    phoneNumber: phoneNumber,
    elementText: elementText
  })
}

/**
 * Track email click event
 * @param {string} emailAddress - The email address clicked
 * @param {string} elementText - Text content of the clicked element
 */
export const trackEmailClick = (emailAddress, elementText = '') => {
  trackEvent('emaiLevenT', {
    emailAddress: emailAddress,
    elementText: elementText
  })
}

/**
 * Initialize GTM events system
 * Called on app load to verify dataLayer is working
 */
export const initializeGTMEvents = () => {
  if (typeof window !== 'undefined') {
    // Ensure dataLayer exists
    window.dataLayer = window.dataLayer || []
    
    // Test event to verify dataLayer is working
    window.dataLayer.push({
      'event': 'eventsSystemLoaded',
      'message': 'DPS Hostel Events System Initialized Successfully'
    })
    
    console.log('DPS Hostel Events System Loaded')
    
    // Expose public API
    window.DPSEvents = {
      track: trackEvent,
      trackFormSubmit: trackFormSubmit,
      trackPhoneClick: trackPhoneClick,
      trackEmailClick: trackEmailClick
    }
  }
}

export default {
  trackEvent,
  trackFormSubmit,
  trackPhoneClick,
  trackEmailClick,
  initializeGTMEvents
}

