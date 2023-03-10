import React, { FC, useEffect, useState } from 'react';

import { Text } from '../../components/ui/text';
import { Title } from '../../components/ui/title';

import styled from './terms-of-use.module.scss';

interface TermsOfUseProps {
    contentView: 'terms' | 'contract'
}

export const TermsOfUse:FC<TermsOfUseProps> = ({ contentView }) => {
    const [title, setTitle] = useState('')

    useEffect(() => {
        if (contentView === 'terms') {
            setTitle('Договор оферты')
        } else {
            setTitle('Правила пользования')
        }
    }, [contentView])

    return (
        <React.Fragment>
            <Title tag='h3'>
                {title}
            </Title>
            <div className={styled.textContent}>
                <div className={styled.textBlock}>
                    <div className={styled.blockTitle}> 
                        <Text largeSize={true} boldWeight={true}>
                            1. Идейные соображения высшего порядка, а также высокое качество позиционных исследований представляет собой интересный эксперимент проверки экспериментов, поражающих по своей масштабности и грандиозности.
                        </Text>
                    </div>
                    <div className={styled.blockItem}>
                        <div className={styled.item}>
                            <Text largeSize={true}>
                                1.1. Задача организации, в особенности же социально-экономическое развитие однозначно определяет каждого участника как способного принимать собственные решения касаемо инновационных методов управления процессами.  
                            </Text>
                        </div>
                        <div className={styled.item}>
                            <Text largeSize={true}>
                                1.2. Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление играет важную роль в формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней политики лишь добавляют фракционных разногласий и преданы социально-демократической анафеме.  
                            </Text>
                        </div>
                        <div className={styled.item}>
                            <Text largeSize={true}>
                                1.3. Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали.  
                            </Text>
                        </div>
                        <div className={styled.item}>
                            <Text largeSize={true}>
                                1.4. Но независимые государства, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объединены в целые кластеры себе подобных. 
                            </Text>
                        </div>
                    </div>
                </div>
                <div className={styled.textBlock}>
                    <div className={styled.blockTitle}> 
                        <Text largeSize={true} boldWeight={true}>
                            2. С учётом сложившейся международной обстановки, консультация с широким активом предоставляет широкие возможности для приоритизации разума над эмоциями.
                        </Text>
                    </div>
                    <div className={styled.blockItem}>
                        <div className={styled.item}>
                            <Text largeSize={true}>
                                2.1. Задача организации, в особенности же социально-экономическое развитие однозначно определяет каждого участника как способного принимать собственные решения касаемо инновационных методов управления процессами.   
                            </Text>
                        </div>
                        <div className={styled.blockItem}>
                            <div className={styled.item}>
                                <Text largeSize={true}>
                                    2.1.1. Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление играет важную роль в формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней политики лишь добавляют фракционных разногласий и преданы социально-демократической анафеме.   
                                </Text>
                            </div>
                            <div className={styled.item}>
                                <Text largeSize={true}>
                                    2.1.2. Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали.   
                                </Text>
                            </div>
                        </div>
                        <div className={styled.item}>
                            <Text largeSize={true}>
                                2.2. Но независимые государства, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объединены в целые кластеры себе подобных.  
                            </Text>
                        </div>
                    </div>
                </div>
                <div className={styled.textBlock}>
                    <div className={styled.blockTitle}> 
                        <Text largeSize={true} boldWeight={true}>
                            3. Принимая во внимание показатели успешности, укрепление и развитие внутренней структуры требует от нас анализа приоритизации разума над эмоциями.
                        </Text>
                    </div>
                    <div className={styled.blockItem}>
                        <div className={styled.item}>
                            <Text largeSize={true}>
                                3.1. Задача организации, в особенности же социально-экономическое развитие однозначно определяет каждого участника как способного принимать собственные решения касаемо инновационных методов управления процессами.    
                            </Text>
                        </div>
                        <div className={styled.blockItem}>
                            <div className={styled.item}>
                                <Text largeSize={true}>
                                    3.1.1. Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление играет важную роль в формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней политики лишь добавляют фракционных разногласий и преданы социально-демократической анафеме.    
                                </Text>
                            </div>
                            <div className={styled.item}>
                                <Text largeSize={true}>
                                    3.1.2. Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали.   
                                </Text>
                            </div>
                        </div>
                        <div className={styled.item}>
                            <Text largeSize={true}>
                                3.2. Но независимые государства, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объединены в целые кластеры себе подобных.  
                            </Text>
                        </div>
                        <div className={styled.item}>
                            <Text largeSize={true}>
                                3.3. Не следует, однако, забывать, что экономическая повестка сегодняшнего дня требует анализа анализа существующих паттернов поведения.  
                            </Text>
                        </div>
                        <div className={styled.blockItem}>
                            <div className={styled.item}>
                                <Text largeSize={true}>
                                    3.3.1. А ещё представители современных социальных резервов набирают популярность среди определенных слоев населения, а значит, должны быть функционально разнесены на независимые элементы.      
                                </Text>
                            </div>
                            <div className={styled.blockItem}>
                                <div className={styled.item}>
                                    <Text largeSize={true}>
                                        3.3.1.1. Стремящиеся вытеснить традиционное производство, нанотехнологии могут быть объявлены нарушающими общечеловеческие нормы этики и морали.     
                                    </Text>
                                </div>
                                <div className={styled.item}>
                                    <Text largeSize={true}>
                                        3.3.1.2. Прежде всего, разбавленное изрядной долей эмпатии, рациональное мышление однозначно фиксирует необходимость новых предложений. Являясь всего лишь частью общей картины, независимые государства представлены в исключительно положительном свете.   
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <div className={styled.item}>
                            <Text largeSize={true}>
                                3.4. Повседневная практика показывает, что убеждённость некоторых оппонентов требует от нас анализа распределения внутренних резервов и ресурсов.  
                            </Text>
                        </div>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
    
} 