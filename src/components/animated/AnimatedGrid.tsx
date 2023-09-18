import React from 'react'
import { useSpring, animated, config, SpringConfig, useInView, useTrail, UseTrailProps } from '@react-spring/web';
import { cn, groupIntoRows } from '@/lib/utils';
import { nanoid } from 'nanoid';


const Row = ({
  items,
  className,
  config
}: {
  items: any[],
  className?: string,
  config?: UseTrailProps
}) => {
  const [ref, inView] = useInView()
  const trails = useTrail(
    items.length,
    {
      ...{
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: inView ? 1 : 0,
        y: inView ? 0 : -50,
        from: { opacity: 0, y: -50 }
      },
      ...config
    }
  )

  return (
    <div ref={ref} className={cn([
      'grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3',
      className
    ])}>

      {
        trails.map((trail, index) => {
          return <animated.div key={nanoid()} style={trail}>{items[index]}</animated.div>
        })
      }

    </div>
  )
}

const AnimatedGrid = ({
  items,
  className,
  config,
  itemsPerRow=4,
  rowClasses
}: {
  items: any[],
  className?: string,
  config?: UseTrailProps,
  itemsPerRow?: number,
  rowClasses?: string
}) => {

  return (
    <div className={cn([
      'container mx-auto flex flex-col gap-3',
      className
    ])}>
      {
        groupIntoRows(items, itemsPerRow).map(items => {
          return (
            <Row key={nanoid()} items={items} className={rowClasses} config={config} />
          )
        })
      }
    </div>
  )
}

export default AnimatedGrid