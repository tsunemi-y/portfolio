import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import ReactModal from 'react-modal'
import Button from '@mui/material/Button'
import Calendar from 'react-calendar'
import CalendarContainer from './CalendarContainer'
import Layout from 'components/templates/Layout'
import Box from 'components/layout/Box'
import useAvailableDatetimes from '../../services/reservations/useAvailableDatetimes'
import addAvailableDatetime from '../../services/reservations/addAvailableDatetime'
import useAuth from '../../services/authentications/useAuth'
import Loading from 'components/organisms/Loading'

// todo
// ・○×のデザイン

type TileContentProps = {
  date: Date, 
  view: string
}

const ReservationPage: NextPage = () => {
  // 認証
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useAuth(setIsLoading)

  // hydration errorの対策（フロントとバックのレンダリング内容が異なる場合に出るエラー）
  const [isClient, setIsClient] = useState<boolean>(false)
  const [avaTimeElements, setAvaTimeElements] = useState<JSX.Element[]>([])
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  // 予約完了後モーダル
  const [isEndReservationModal, setIsEndReservationModal] = useState<boolean>(false)
  const [endReservationModalMessage, setEndReservationModalMessage] = useState<string>('')

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleOpenModal = () => {
    setIsOpenModal(true)
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  // APIから利用可能時間取得
  const { availableDatetimesHook, isLoadingHook, isError } = useAvailableDatetimes()
  if (isLoadingHook) return <Loading /> 
  if (isError) return <div>エラーが発生しました。再接続をお願いします。</div>

  const availableDatetimes = availableDatetimesHook ?? []

  // カレンダー○×表示の判定に使用するため、利用可能日を配列に追加
  let avaDatetimes: string[] = []
  Array.isArray(availableDatetimes) && availableDatetimes.map((dt: any) => {
    avaDatetimes.push(dayjs(dt.available_date).format('YYYY/MM/DD'))
  })

  // カレンダーの表示内容を取得
  const getTileContent = ({ date, view } : TileContentProps) => {
    if (view !== 'month') return <></>

    const calendarDate:string = dayjs(date).format('YYYY/MM/DD')
    if (!avaDatetimes.includes(calendarDate)) return <p>×</p>
    return <p>○</p>
  }

  // todo:useMemo、useCallback、useReducerあたりを使う

  // 利用可能日時登録
  const saveAvailableDatetime = (event: React.MouseEvent<HTMLButtonElement>) => {
    const targetDate = event.currentTarget.dataset.date
    const targetTime = event.currentTarget.innerText
    const data = {
      targetDate,
      targetTime,
    }

    setIsLoading(true)
    addAvailableDatetime(data)
    handleCloseModal()
    setIsLoading(false)

    // 予約完了モーダル
    setIsEndReservationModal(true) // モーダル表示
    const formattedDatetime = dayjs(`${targetDate} ${targetTime}`).format('MM月DD日 HH時mm分')
    setEndReservationModalMessage(formattedDatetime) // メッセージ設定
  }

  // カレンダー押下時の処理
  const handleOnClickDay = (value: Date, event: React.MouseEvent<HTMLButtonElement>) => {
    const targetDay = dayjs(value).format('YYYY/MM/DD')

    let avaTimeElements: JSX.Element[] = []
    availableDatetimes.map(dt=> {
      if (targetDay !== dayjs(dt.available_date).format('YYYY/MM/DD')) return 
      dt.available_times.map((time, i) => {
        avaTimeElements.push(
          <Box key={i}>
            {/* todo: ボタンをコンポーネント化 */}
            <Button 
              sx={{ 
                backgroundColor: process.env.MAIN_COLOR ?? '#72cc82',
                color: 'white',
                marginBottom: '1rem',
                width: '100%',
               }}
               data-date={targetDay}
               onClick={saveAvailableDatetime}
            >
              {time}
            </Button>
          </Box>
        )
      })

      // 利用可能日時の要素をstateに渡す（modalにて、利用可能日時を表示するため）
      setAvaTimeElements(avaTimeElements)
      
      handleOpenModal()
    })
  }

  return (
    <>

      { isLoading ? <Loading /> : 
        <Layout>
          <CalendarContainer>
            {isClient && 
              <Calendar 
                tileContent={getTileContent}
                onClickDay={handleOnClickDay}
              />
            }
          </CalendarContainer>

          {/* 利用可能時間を選択させるモーダル */}
          <ReactModal
            isOpen={isOpenModal}
            onRequestClose={handleCloseModal}
            ariaHideApp={false}
            style={{ 
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
              },
              content: {
                position: 'absolute',
                top: '40px',
                left: '40px',
                right: '40px',
                bottom: '40px',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px',
              }
            }}
          >
            <Box 
              textAlign={'right'}
              onClick={handleCloseModal}
            >
              ×
            </Box>
            {avaTimeElements}
          </ReactModal>

          {/* 予約完了通知モーダル */}
          { isEndReservationModal && 
            <ReactModal
              isOpen={isEndReservationModal}
              onRequestClose={() => setIsEndReservationModal(false)}
              ariaHideApp={false}
              style={{ 
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.75)',
                },
                content: {
                  position: 'absolute',
                  top: '40px',
                  left: '40px',
                  right: '40px',
                  bottom: '40px',
                  border: '1px solid #ccc',
                  background: '#fff',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none',
                  padding: '20px',
                  height: '100px',
                }
              }}
            >
              <Box 
                textAlign={'right'}
                onClick={handleCloseModal}
              >
                ×
              </Box>
              <Box 
                textAlign={'center'}
                onClick={handleCloseModal}
              >
                {endReservationModalMessage}
              </Box>
            </ReactModal>
          }

        </Layout>
      }
    </>
  )
}

export default ReservationPage
