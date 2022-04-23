import React from 'react'

//import styles
import styles from "./dropdown.module.css"

const DropDown = () => {

    const dropdown = [
        {
        name: "قطعات موتوری",
        href: "#",
        subItems: [
            {name: "سرسلندر" , href:"#"},
            {name: "سرسلندر" , href:"#"},
            {name: "سرسلندر" , href:"#"},
            {name: "سرسلندر" , href:"#"},
            ],
        },
        {
            name: "قطعات موتوری",
            href: "#",
            subItems: [
                {name: "سرسلندر" , href:"#"},
                {name: "سرسلندر" , href:"#"},
                {name: "سرسلندر" , href:"#"},
                {name: "سرسلندر" , href:"#"},
                ],
            },
            {
                name: "قطعات موتوری",
                href: "#",
                subItems: [
                    {name: "سرسلندر" , href:"#"},
                    {name: "سرسلندر" , href:"#"},
                    {name: "سرسلندر" , href:"#"},
                    {name: "سرسلندر" , href:"#"},
                    ],
                },
                {
                    name: "قطعات موتوری",
                    href: "#",
                    subItems: [
                        {name: "سرسلندر" , href:"#"},
                        {name: "سرسلندر" , href:"#"},
                        {name: "سرسلندر" , href:"#"},
                        {name: "سرسلندر" , href:"#"},
                        {name: "سرسلندر" , href:"#"},
                        {name: "سرسلندر" , href:"#"},
                        {name: "سرسلندر" , href:"#"},
                        {name: "سرسلندر" , href:"#"},
                        {name: "سرسلندر" , href:"#"},
                        {name: "سرسلندر" , href:"#"},
                        ],
                    },
                {
                    name: "قطعات موتوری",
                    href: "#",
                    subItems: [
                        {name: "سرسلندر" , href:"#"},
                        {name: "سرسلندر" , href:"#"},
                        {name: "سرسلندر" , href:"#"},
                        {name: "سرسلندر" , href:"#"},
                        ],
                    },
                    {
                        name: "قطعات موتوری",
                        href: "#",
                        subItems: [
                            {name: "سرسلندر" , href:"#"},
                            {name: "سرسلندر" , href:"#"},
                            {name: "سرسلندر" , href:"#"},
                            {name: "سرسلندر" , href:"#"},
                            {name: "سرسلندر" , href:"#"},
                            {name: "سرسلندر" , href:"#"},
                            {name: "سرسلندر" , href:"#"},
                            ],
                        },{
                            name: "قطعات موتوری",
                            href: "#",
                            subItems: [
                                {name: "سرسلندر" , href:"#"},
                                {name: "سرسلندر" , href:"#"},
                                {name: "سرسلندر" , href:"#"},
                                {name: "سرسلندر" , href:"#"},
                                ],
                            },{
                                name: "قطعات موتوری",
                                href: "#",
                                subItems: [
                                    {name: "سرسلندر" , href:"#"},
                                    {name: "سرسلندر" , href:"#"},
                                    {name: "سرسلندر" , href:"#"},
                                    {name: "سرسلندر" , href:"#"},
                                    ],
                                }

]
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <ul className={styles.dropdownUl}>
                {dropdown.map(item => 
                <li>
                    <section>
                        <h5>{item.name}</h5>
                        <ul>
                            {item.subItems.map(data =>
                                
                                <li>
                                    {data.name}
                                </li>
                                
                                )}
                        </ul>
                    </section>
                </li>
                    )}
            </ul>
        </div>
    </div>
  )
}

export default DropDown