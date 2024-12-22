
document.addEventListener('DOMContentLoaded', () => {
    const availableTagsContainer = document.getElementById('available-tags');
    const selectedTagsContainer = document.getElementById('selected-tags');
    const itemsList = document.getElementById('items-list');
    const completeItemsList = document.getElementById('complete-items-list');
    const resetButton = document.getElementById('reset-button');

    // Create all tags from our tags object
    const allTags = [...new Set([].concat(...Object.values(tags)))];
    
    // Create and display available tags
    allTags.forEach(tag => {
        const tagElement = createTagElement(tag);
        availableTagsContainer.appendChild(tagElement);
    });

    function createTagElement(tagText) {
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.textContent = tagText;
        tag.draggable = true;
        
        tag.addEventListener('dragstart', (e) => {
            tag.classList.add('dragging');
            e.dataTransfer.setData('text/plain', tagText);
        });
        
        tag.addEventListener('dragend', () => {
            tag.classList.remove('dragging');
        });

        tag.addEventListener('click', () => {
            if (tag.parentElement === selectedTagsContainer) {
                availableTagsContainer.appendChild(tag);
                updatePossibleItems();
                updateTagHighlights();
                updateCompleteItems();
            }
        });
        
        return tag;
    }

    // Reset button functionality
    resetButton.addEventListener('click', () => {
        while (selectedTagsContainer.firstChild) {
            availableTagsContainer.appendChild(selectedTagsContainer.firstChild);
        }
        updatePossibleItems();
        updateTagHighlights();
        updateCompleteItems();
    });

    // Make both containers drop targets
    [availableTagsContainer, selectedTagsContainer].forEach(container => {
        container.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        container.addEventListener('drop', (e) => {
            e.preventDefault();
            const tagText = e.dataTransfer.getData('text/plain');
            const existingTag = Array.from(document.querySelectorAll('.tag'))
                .find(tag => tag.textContent === tagText);
            
            if (existingTag) {
                container.appendChild(existingTag);
                updatePossibleItems();
                updateTagHighlights();
                updateCompleteItems();
            }
        });
    });

    function updateCompleteItems() {
        const selectedTags = Array.from(selectedTagsContainer.children).map(tag => tag.textContent);
        const completeItems = findCompleteItems(selectedTags);
        
        completeItemsList.innerHTML = '';
        completeItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            completeItemsList.appendChild(li);
        });
    }

    function findCompleteItems(selectedTags) {
        if (selectedTags.length === 0) return [];
        return Object.entries(itemDefinitions)
            .filter(([_, itemTags]) => 
                itemTags.length === selectedTags.length && 
                selectedTags.every(tag => itemTags.includes(tag)))
            .map(([itemName, _]) => itemName);
    }

    function updatePossibleItems() {
        const selectedTags = Array.from(selectedTagsContainer.children).map(tag => tag.textContent);
        const possibleItems = findPossibleItems(selectedTags);
        
        itemsList.innerHTML = '';
        possibleItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            itemsList.appendChild(li);
        });
    }

    function findPossibleItems(selectedTags) {
        if (selectedTags.length === 0) return [];
        return Object.entries(itemDefinitions)
            .filter(([_, itemTags]) => 
                selectedTags.every(tag => itemTags.includes(tag)))
            .map(([itemName, _]) => itemName);
    }
      function updateTagHighlights() {
          const selectedTags = Array.from(selectedTagsContainer.children).map(tag => tag.textContent);
          const availableTags = Array.from(availableTagsContainer.children);

          // Reset all tags
          availableTags.forEach(tag => {
              tag.classList.remove('possible-match', 'potential-match', 'complete-match');
          });

          if (selectedTags.length === 0) {
              // When no tags are selected, highlight all tags that are part of any item
              const allValidTags = new Set();
              Object.values(itemDefinitions).forEach(itemTags => {
                  itemTags.forEach(tag => allValidTags.add(tag));
              });
            
              availableTags.forEach(tagElement => {
                  if (allValidTags.has(tagElement.textContent)) {
                      tagElement.classList.add('possible-match');
                  }
              });
              return;
          }

          // Find all possible items based on current selection
          Object.entries(itemDefinitions).forEach(([itemName, itemTags]) => {
              const missingTags = itemTags.filter(tag => !selectedTags.includes(tag));
            
              if (missingTags.length === 1) {
                  // Highlight tags that would complete an item
                  availableTags.forEach(tagElement => {
                      if (missingTags.includes(tagElement.textContent)) {
                          tagElement.classList.add('complete-match');
                      }
                  });
              } else if (missingTags.length === 2) {
                  // Highlight tags that would get us closer to completing an item
                  availableTags.forEach(tagElement => {
                      if (missingTags.includes(tagElement.textContent)) {
                          tagElement.classList.add('potential-match');
                      }
                  });
              } else if (selectedTags.every(tag => itemTags.includes(tag))) {
                  // Highlight tags that could be added to current valid combination
                  availableTags.forEach(tagElement => {
                      if (missingTags.includes(tagElement.textContent)) {
                          tagElement.classList.add('possible-match');
                      }
                  });
              }
          });
      }
  });
