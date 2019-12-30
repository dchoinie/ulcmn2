import React from "react"
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PageTitle from "../components/pageTitle"

export default () => {
  const data = useStaticQuery(graphql`
    {
      history1: file(relativePath: { eq: "history/1.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history2: file(relativePath: { eq: "history/2.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history3: file(relativePath: { eq: "history/3.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history4: file(relativePath: { eq: "history/4.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history5: file(relativePath: { eq: "history/5.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history6: file(relativePath: { eq: "history/6.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history7: file(relativePath: { eq: "history/7.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history8: file(relativePath: { eq: "history/8.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history9: file(relativePath: { eq: "history/9.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history10: file(relativePath: { eq: "history/10.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history11: file(relativePath: { eq: "history/11.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history12: file(relativePath: { eq: "history/12.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history13: file(relativePath: { eq: "history/13.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history14: file(relativePath: { eq: "history/14.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history15: file(relativePath: { eq: "history/15.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history16: file(relativePath: { eq: "history/16.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history17: file(relativePath: { eq: "history/17.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history18: file(relativePath: { eq: "history/18.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history19: file(relativePath: { eq: "history/19.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history20: file(relativePath: { eq: "history/20.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history21: file(relativePath: { eq: "history/21.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history22: file(relativePath: { eq: "history/22.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history23: file(relativePath: { eq: "history/23.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history24: file(relativePath: { eq: "history/24.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history25: file(relativePath: { eq: "history/25.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history26: file(relativePath: { eq: "history/26.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history27: file(relativePath: { eq: "history/27.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history28: file(relativePath: { eq: "history/28.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history29: file(relativePath: { eq: "history/29.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history30: file(relativePath: { eq: "history/30.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history31: file(relativePath: { eq: "history/31.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history32: file(relativePath: { eq: "history/32.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history33: file(relativePath: { eq: "history/33.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history34: file(relativePath: { eq: "history/34.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history35: file(relativePath: { eq: "history/35.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history36: file(relativePath: { eq: "history/36.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history37: file(relativePath: { eq: "history/37.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history38: file(relativePath: { eq: "history/38.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history39: file(relativePath: { eq: "history/39.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history40: file(relativePath: { eq: "history/40.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history41: file(relativePath: { eq: "history/41.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history42: file(relativePath: { eq: "history/42.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history43: file(relativePath: { eq: "history/43.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history44: file(relativePath: { eq: "history/44.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history45: file(relativePath: { eq: "history/45.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history46: file(relativePath: { eq: "history/46.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history47: file(relativePath: { eq: "history/47.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history48: file(relativePath: { eq: "history/48.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history49: file(relativePath: { eq: "history/49.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history50: file(relativePath: { eq: "history/50.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history51: file(relativePath: { eq: "history/51.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history52: file(relativePath: { eq: "history/52.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history53: file(relativePath: { eq: "history/53.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      history54: file(relativePath: { eq: "history/54.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <PageTitle title="History Of ULC" subTitle="Explore the rich history of our campus ministry at the University of Minnesota by browsing through the pictures below." />
      <Timeline lineColor={"#ddd"}>
        <TimelineItem key="001" dateText="1925">
          <h2 className="text-2xl">Campus Ministry Begins</h2>
          <p className="my-2">
            On February 18th, 1925, a college chapter of the Walther League was
            organized with 31 charter members.
          </p>
          <Img fluid={data.history1.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="002" dateText="1925">
          <h2 className="text-2xl">REV. EDGAR F WITTE</h2>
          <p className="my-2">
            Pastor Witte of Pilgrim Lutheran Church in St. Paul served as the
            pastoral advisor for the fledgling campus ministry.
          </p>
          <Img fluid={data.history2.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="003" dateText="1926">
          <h2 className="text-2xl">REV. THEOPHIL SCHROEDEL</h2>
          <p className="my-2">
            After several failed attempts to call a full-time campus pastor,
            Rev. Schroedel of Mt. Olive Lutheran Church, Minneapolis, agreed to
            serve part-time. Bible studies were organized on campus and students
            were encouraged to attend services at local congregations.
          </p>
          <Img fluid={data.history3.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="004" dateText="1934">
          <h2 className="text-2xl">GAMMA DELTA FORMED</h2>
          <p className="my-2">
            Gamma Delta, the International Association for Lutheran Students,
            was founded with the U of M group as the Gamma Chapter. Gamma Delta
            became an important spiritual and social outlet for hundreds of
            students, many of whom met their spouses through the organization
            and its activities. Pictured are Gamma Delta leaders with Pastor
            Schroedel in 1939.
          </p>
          <Img fluid={data.history4.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="005" dateText="1940">
          <h2 className="text-2xl">DR. OSWALD HOFFMAN</h2>
          <p className="my-2">
            Dr. Oswald C.J. Hoffmann, who would eventually become the speaker of
            The Lutheran Hour, helped with pastoral duties while he was
            completing his doctorate at the U of M.
          </p>
          <Img fluid={data.history5.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="006" dateText="1940">
          <h2 className="text-2xl">SUNDAY SERVICES AT NOLTE CENTER</h2>
          <p className="my-2">
            Dr. Hoffman began offering regular Sunday services on campus for the
            first time at the U of M’s Nolte Center for Continuing Study.
          </p>
          <Img fluid={data.history6.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="007" dateText="1940">
          <h2 className="text-2xl">REV. RUDOLPH NORDEN</h2>
          <p className="my-2">
            Our first full-time campus pastor, Rev. Norden served a thriving
            campus ministry for eleven years. Under his leadership the Gamma
            Delta group continued to grow and flourish. In 1951 Pastor Nordan
            was called to serve the LC-MS at its national office of campus
            ministry.
          </p>
          <Img fluid={data.history7.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="008" dateText="1945">
          <h2 className="text-2xl">GAMMA DELTA LEADERS</h2>
          <p className="my-2">
            Gamma Delta continued to grow and thrive. Here are the leaders of
            1945 with Pastor Norden.
          </p>
          <Img fluid={data.history8.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="009" dateText="1948">
          <h2 className="text-2xl">WINTER WONDERLAND FORMAL</h2>
          <p className="my-2">
            Students of Gamma Delta enjoyed many social opportunities as well as
            Bible Studies and worship services.
          </p>
          <Img fluid={data.history9.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="010" dateText="1949">
          <h2 className="text-2xl">GAMMA DELTA VESPERS</h2>
          <p className="my-2">
            Gamma Delta held Sunday evening meetings, providing dinner,
            discussions and a vespers service for the students. These meetings
            were held in the University YMCA building.
          </p>
          <Img fluid={data.history10.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="011" dateText="1949">
          <h2 className="text-2xl">CONSTRUCTION BEGINS</h2>
          <p className="my-2">
            Ground-breaking for the chapel took place on March 27, 1949.
            Delegates to the convention of the Minnesota District of the LC-MS
            took a recess from their sessions at Concordia College, St. Paul, to
            come to ULC for the laying of the cornerstone on August 16th, 1949.
          </p>
          <Img fluid={data.history11.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="012" dateText="1950">
          <h2 className="text-2xl">NEW CHAPEL DEDICATED</h2>
          <p className="my-2">
            Our newly built chapel was dedicated in a series of three services
            on Quasimodogeniti Sunday, April 16, 1950.
          </p>
          <Img fluid={data.history12.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="013" dateText="1950">
          <h2 className="text-2xl">STUDENT CONGREGATION FORMED</h2>
          <p className="my-2">
            Having their own chapel and student center was a great blessings to
            our students who now had their own space for worship and their many
            Gamma Delta activities.
          </p>
          <Img fluid={data.history13.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="014" dateText="1952">
          <h2 className="text-2xl">REV. LAMBERT MEHL</h2>
          <p className="my-2">
            Rev. Mehl served ULC for two years before being called to serve as
            President of St. Paul’s College in Concordia, Missouri.
          </p>
          <Img fluid={data.history14.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="015" dateText="1952">
          <h2 className="text-2xl">BIBLE STUDY WITH PASTOR BOETSCHER</h2>
          <p className="my-2">
            ULC has a long tradition of inviting expert pastors and theologians
            to teach our students.
          </p>
          <Img fluid={data.history15.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="016" dateText="1950s">
          <h2 className="text-2xl">U OF M CAMPUS AT NIGHT</h2>
          <p className="my-2"></p>
          <Img fluid={data.history16.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="017" dateText="1950s">
          <h2 className="text-2xl">CANOEING</h2>
          <p className="my-2">
            Fellowship with other Lutheran students is a big part of the campus
            ministry experience.
          </p>
          <Img fluid={data.history17.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="018" dateText="1954">
          <h2 className="text-2xl">REV. REUBEN BEISEL</h2>
          <p className="my-2">
            Pastor Beisel served ULC until 1959 when he was called to be
            President of St. John’s College in Winfield, Kansas.
          </p>
          <Img fluid={data.history18.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="019" dateText="1954">
          <h2 className="text-2xl">AT CAMP</h2>
          <p className="my-2">
            Annual trips to the camp/retreat on the St. Croix river were a
            highlight of student life at ULC
          </p>
          <Img fluid={data.history19.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="020" dateText="1954">
          <h2 className="text-2xl">SUNDAY SERVICE</h2>
          <p className="my-2">
            Students were regularly active in worship and Bible study, and a
            second Sunday service was added to handle the large number of
            people.
          </p>
          <Img fluid={data.history20.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="021" dateText="1955">
          <h2 className="text-2xl">
            ULC BECOMES AN OFFICIAL CONGREGATION OF THE LCMS
          </h2>
          <p className="my-2">
            Under the leadership of Pastor Beisel and at the urging of the
            Minnesota District In August of 1955 the Minnesota Convention
            accepted ULC as an official congregation of the Lutheran
            Church-Missouri Synod. Pictured are students gathered for a
            candlelight vespers service.
          </p>
          <Img fluid={data.history21.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="022" dateText="1956">
          <h2 className="text-2xl">A BAPTISM</h2>
          <p className="my-2">
            Many have come to faith and been baptized at ULC over the years,
            including several international students like Miss Sagamoto.
          </p>
          <Img fluid={data.history22.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="023" dateText="1956">
          <h2 className="text-2xl">WEDDING</h2>
          <p className="my-2">
            Many students have met their spouses and been married at ULC.
          </p>
          <Img fluid={data.history23.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="024" dateText="1956">
          <h2 className="text-2xl">CHRISTMAS CONCERT</h2>
          <p className="my-2">
            Music is a big part of ULC's worship life. The choir was so popular
            in the 1950s that they regularly put on concerts and even recorded
            an album.
          </p>
          <Img fluid={data.history24.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="025" dateText="1957">
          <h2 className="text-2xl">EVENING SERVICE</h2>
          <p className="my-2">
            Gamma Delta's Sunday Evening meetings which included a Vespers
            service were very popular.
          </p>
          <Img fluid={data.history25.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="026" dateText="1957">
          <h2 className="text-2xl">STUDENT DINNER</h2>
          <p className="my-2">
            Students enjoyed meals in the Chapel's undercroft on weekends when
            the dormitory cafeterias were closed.
          </p>
          <Img fluid={data.history26.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="027" dateText="1960">
          <h2 className="text-2xl">REV. HARRY HUXHOLD</h2>
          <p className="my-2">
            Rev. Huxhold began to hold daily Matins services at the Chapel and
            wrote the daily service book Bless We The Lord, published by
            Concordia Publishing House in 1963, which became the pattern for The
            Priesthood Prays, still in use at ULC today. Weekly communion began
            to be offered after Easter of 1960.
          </p>
          <Img fluid={data.history27.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="028" dateText="1960">
          <h2 className="text-2xl">SUNDAY NIGHT MEETING</h2>
          <p className="my-2">
            Over the years ULC has brought dozens of nationally recognized
            theologians and scholars to speak to our students, a tradition that
            continues today.
          </p>
          <Img fluid={data.history28.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="029" dateText="1964">
          <h2 className="text-2xl">HOOTENANNY</h2>
          <p className="my-2">
            Students gathered to sing folk music in the chapel lounge.
          </p>
          <Img fluid={data.history29.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="030" dateText="1965">
          <h2 className="text-2xl">GAMMA DELTA BANQUET</h2>
          <p className="my-2">
            Jungle Rhythm was the theme of the 1965 banquet. There is always
            plenty of room for fun in campus ministry!
          </p>
          <Img fluid={data.history30.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="031" dateText="1966">
          <h2 className="text-2xl">REV. BENNO SALEWSKI</h2>
          <p className="my-2">
            Pastor Salewski served as ULC's campus pastor from 1966 until 1973.
          </p>
          <Img fluid={data.history31.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="032" dateText="1969">
          <h2 className="text-2xl">CONTEMPORARY WORSHIP</h2>
          <p className="my-2">
            Pastor Salewski introduced even more radically experimental worship
            services. Students became more involved with both the planning and
            conduct of the Sunday services as well. Eventually traditional
            liturgical services, which had continued to be one of the Sunday
            options, were dropped altogether.
          </p>
          <Img fluid={data.history32.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="033" dateText="1973">
          <h2 className="text-2xl">REV. ROGER STOEHR</h2>
          <p className="my-2">
            Under Pastor Stoehr, ties were strengthened with the liberal-minded
            American Lutheran Church (now a part of the ELCA). In 1975, the ALC
            campus ministry moved into ULC to work cooperatively in campus
            outreach and student worship. The LCMS ended these arrangements in
            the early 1980’s.
          </p>
          <Img fluid={data.history33.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="034" dateText="1983">
          <h2 className="text-2xl">REV. JOHN T. PLESS</h2>
          <p className="my-2">
            Called to a much-diminished campus ministry in 1983, following the
            split with the ALC, Pastor Pless worked for 17 years to restore ULC
            to its confessional roots and rebuild the student ministry.
          </p>
          <Img fluid={data.history34.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="035" dateText="1987">
          <h2 className="text-2xl">CHAPEL COUNCIL</h2>
          <p className="my-2">
            The chapel grew and matured under Pastor Pless’s able leadership,
            and returned to fulfilling its original purpose of being a haven and
            a stabilizing influence in the lives of the students who attend.
          </p>
          <Img fluid={data.history35.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="036" dateText="1988">
          <h2 className="text-2xl">PREPARING TO WELCOME STUDENTS TO CAMPUS</h2>
          <p className="my-2"></p>
          <Img fluid={data.history36.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="037" dateText="1995">
          <h2 className="text-2xl">INTERNATIONAL OUTREACH</h2>
          <p className="my-2">
            Accomplishments of this period include the founding of Lutheran
            Student Fellowship, with ULC as a charter chapter; holding annual
            preaching seminars, the lay academy of theology; a restoration of
            the chapel to its original orientation; and outreach to
            international students through the ISCRC.
          </p>
          <Img fluid={data.history37.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="038" dateText="1999">
          <h2 className="text-2xl">MORE FAMILIES</h2>
          <p className="my-2">
            During Pastor Pless's tenure, ULC's non-student membership began to
            grow with more students staying on after college and others joining
            because of the congregation's faithfulness in doctrine and practice.
          </p>
          <Img fluid={data.history38.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="039" dateText="2000">
          <h2 className="text-2xl">REV. DANIEL JASTRAM</h2>
          <p className="my-2">
            Pastor Jastram served as Vacancy Pastor after Pastor Pless was
            called to teach at Concordia Theological Seminary in Fort Wayne,
            Indiana.
          </p>
          <Img fluid={data.history39.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="040" dateText="2000">
          <h2 className="text-2xl">MONTANA BACKPACKING</h2>
          <p className="my-2"></p>
          <Img fluid={data.history40.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="041" dateText="2001">
          <h2 className="text-2xl">REV. DAVID A. KIND</h2>
          <p className="my-2">
            After a struggle with the leadership of the Minnesota South District
            over who had the right to choose the vacancy pastor and to call the
            next campus pastor, ULC successfully defended her right as a regular
            congregation of the synod to call a pastor. Pastor Kind became
            campus pastor in April of 2001.
          </p>
          <Img fluid={data.history41.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="042" dateText="2006">
          <h2 className="text-2xl">VACATION BIBLE SCHOOL</h2>
          <p className="my-2">
            Shortly after Kind’s arrival annual VBS was begun for the growing
            number of children in the congregation as well as regular Sunday
            School and junior catechism classes.
          </p>
          <Img fluid={data.history42.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="043" dateText="2007">
          <h2 className="text-2xl">DEACONESS INTERN</h2>
          <p className="my-2">
            In 2006-07 ULC was able to participate in the deaconess internship
            program. With the help of intern Shaina Mitchell, a food bank called
            the Common Chest was established to help needy students.
          </p>
          <Img fluid={data.history43.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="044" dateText="2009">
          <h2 className="text-2xl">FALL RETREAT</h2>
          <p className="my-2">
            Students enjoying lunch in Dinkytown during the annual Fall Study
            Weekend.
          </p>
          <Img fluid={data.history44.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="045" dateText="2010">
          <h2 className="text-2xl">HIGH SCHOOL YOUTH GROUP</h2>
          <p className="my-2">
            In 2009 ULC began a liturgical arts program to reach out to the arts
            community on campus. A High School Youth group was started the same
            year. In 2011 a new international student outreach effort was
            started.
          </p>
          <Img fluid={data.history45.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="046" dateText="2011">
          <h2 className="text-2xl">PALM SUNDAY PROCESSION</h2>
          <p className="my-2"></p>
          <Img fluid={data.history46.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="047" dateText="2012">
          <h2 className="text-2xl">DEMOLITION OF THE OLD ULC CHAPEL</h2>
          <p className="my-2">
            In September of 2011 the MN South District Board of Directors sold
            the chapel property to make way for luxury student apartments. This
            action was the culmination of three decades of strife with the
            district leadership over ULC’s confessional and liturgical approach
            to campus ministry. The chapel was deconsecrated on June 24, 2012
            &#40;Nativity of St. John the Baptist&#41;
          </p>
          <Img fluid={data.history47.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="048" dateText="2012">
          <h2 className="text-2xl">WORSHIP AT LUTHER SEMINARY</h2>
          <p className="my-2">
            In spite of the loss of the first chapel, our congregation has
            continued to grow and thrive in exile, holding services off campus
            at Luther Seminary's Chapel of the Cross.
          </p>
          <Img fluid={data.history48.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="049" dateText="2013">
          <h2 className="text-2xl">LUTHER HOUSE</h2>
          <p className="my-2">
            In order to reestablish its presence at the U of M and further
            efforts in campus ministry, ULC purchased and renovated the former
            Delta Delta Delta sorority house. Luther House was dedicated on
            April 5, 2013, and is now home to all of ULC's weekday services and
            activities.
          </p>
          <Img fluid={data.history49.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="050" dateText="2014">
          <h2 className="text-2xl">LAND ON WHICH TO BUILD</h2>
          <p className="my-2">
            ULC purchased the property adjacent to Luther House's parking lot to
            provide a site for a new chapel.
          </p>
          <Img fluid={data.history50.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="051" dateText="2015">
          <h2 className="text-2xl">FALL RETREAT</h2>
          <p className="my-2">
            In spite of being without a chapel, our campus congregation has
            grown in to a congregation of some 140 souls from all around the
            Twin Cities &#40;and even as far as Eau Claire, WI!&#41; who have
            made ULC their spiritual home.
          </p>
          <Img fluid={data.history51.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="052" dateText="2016">
          <h2 className="text-2xl">CAMPUS MISSIONARY INSTALLED</h2>
          <p className="my-2">
            In partnership with the MN South District &#40;under new and
            supportive leadership&#41; and the LCMS Office of National Mission,
            ULC received her first campus missionary, Miss Rebecca Schaff.
          </p>
          <Img fluid={data.history52.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="053" dateText="2018">
          <h2 className="text-2xl">CHAPEL CONSTRUCTION BEGINS</h2>
          <p className="my-2">
            On the lot next to Luther House, construction of the new University
            Lutheran Chapel began in June of 2018.
          </p>
          <Img fluid={data.history53.childImageSharp.fluid} />
        </TimelineItem>
        <TimelineItem key="054" dateText="2019">
          <h2 className="text-2xl">THE NEW CHAPEL IS BUILT</h2>
          <p className="my-2">
            Construction wrapped up in August. The new University Lutheran
            Chapel was dedicated on September 8 with an opening Divine Service
            in the morning and a Vespers service in the afternoon. Over 500
            students, members, friends and alumni attended.
          </p>
          <Img fluid={data.history54.childImageSharp.fluid} />
        </TimelineItem>
      </Timeline>
    </>
  )
}
