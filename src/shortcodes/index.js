import loadContactForm from './contact-form'
import loadAnnouncements from './announcements'
import loadBlogs from './blogs'
import loadOpeningTimes from './opening-times'
import loadPlans from './plans'
import loadProducts from './products'
import loadSchedules from './schedules'

export default (editor, options = {}) => {
  loadContactForm(editor, options)
  loadBlogs(editor, options)
  loadProducts(editor, options)
  loadPlans(editor, options)
  loadAnnouncements(editor, options)
  loadOpeningTimes(editor, options)
  loadSchedules(editor, options)
}
