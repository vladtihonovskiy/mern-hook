import React from 'react';
import {Link} from 'react-router-dom'

export const LinkList = ({links}) => {
  if(!links.length) {
    return <p className="center">Ссылок пока нет </p>
  }

  return(
    <table>
      <thead>
      <tr>
        <th>Номер</th>
        <th>Оригинальная</th>
        <th>Сокращенная</th>
        <th>Окрыть</th>
      </tr>
      </thead>

      <tbody>
      { links.map((link, index) => {
        return(
          <tr key={link._id}>
            <td>{index+ 1}</td>
            <td>{link.from}</td>
            <td>{link.to}</td>
            <td>
              <Link to={`/detail/${link._id}`}> Открыть</Link>
            </td>
          </tr>
        )
      }) }
      </tbody>
    </table>
  )
}
