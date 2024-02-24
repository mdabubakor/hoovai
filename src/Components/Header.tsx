import React from 'react'
import Container from './Container'
import { Navbar } from '../../data'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <Container >
        <div>
          <div>
          <h1>Logo</h1>
          </div>
          <div>
          {
            Navbar.map((item)=>(
              <ul key={item?.id_}>
                <Link href={item?.href}>
                <li>
                  {item?.title}
                </li>
                </Link>
              </ul>
            ))
          }
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
