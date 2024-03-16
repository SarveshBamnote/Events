import './index.css'

const EventItem = props => {
  const {eachEvent, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eachEvent

  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button className="event-button" onClick={onClickEvent} type="button">
        <img className={eventImageClassName} src={imageUrl} alt="event" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
